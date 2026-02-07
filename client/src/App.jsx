import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Applications from './pages/Applications'
import ApplyJob from './pages/ApplyJob'
import RecruterLogin from './components/RecruterLogin'
import { AppContext } from './context/AppContext'

const App = () => {

  const {showRecruterLogin} = useContext(AppContext)

  return (
    <div>
      {showRecruterLogin && <RecruterLogin />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apply-job/:id' element={<ApplyJob />} />
        <Route path='/applications' element={<Applications />} />
      </Routes>
    </div>
  )
}

export default App
