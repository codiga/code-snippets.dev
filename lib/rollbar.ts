const REACT_APP_ROLLBAR_TOKEN = "d3ca2e317ec547f888ee20667cbfb2e6";

export const rollbarConfig = {
  accessToken: REACT_APP_ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: process.env.NEXT_PUBLIC_REACT_APP_ENV,
    client: {
      javascript: {
        code_version: "1.0.0",
      },
    },
  },
};
