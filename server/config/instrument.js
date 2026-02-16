// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"

Sentry.init({
    dsn: process.env.SANTRY_DSN,
    // Setting this option to true will send default PII data to Sentry.
    integrations: [Sentry.mongooseIntegration()],
    // For example, automatic IP address collection on events
    sendDefaultPii: true,
});