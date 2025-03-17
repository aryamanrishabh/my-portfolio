// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://2326fdbe5b196603d70efae6f56797d2@o4508984983289856.ingest.us.sentry.io/4508984999215104",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  integrations: [
    Sentry.feedbackIntegration({
      colorScheme: "dark",
    }),
  ],
});
