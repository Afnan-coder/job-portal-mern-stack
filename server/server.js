import './config/instrument.js'
import * as Sentry from "@sentry/node"
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/db.js'
import { clerkWebhooks } from './controllers/Webhooks.js'
import companyRoutes from './routes/companyRoutes.js'
import connectCloudinary from './config/cloudinary.js'
import jobRoutes from './routes/jobRoutes.js'
import userRoutes from './routes/userRoute.js'
import {clerkMiddleware} from '@clerk/express'


// Initilize the express
const app = express()

// connect to database
await connectDB()
await connectCloudinary()

// Middlewares
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())


// Routes
app.get('/', (req, res) => {
  res.send('Api working')
})

// Test route 
app.get("/debug-sentry", (req, res) => {
  throw new Error("My first Sentry error!");
});


app.post('/webhooks', clerkWebhooks) 
app.use('/api/company', companyRoutes)
app.use('/api/jobs', jobRoutes)
app.use('/api/users', userRoutes)


const PORT = process.env.PORT || 5000

// Sentry setup
Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})