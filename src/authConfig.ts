import { Configuration, LogLevel, PopupRequest } from '@azure/msal-browser';

export const msalConfig: Configuration = {
  auth: {
    clientId: 'a9b7c808-f634-40cc-9ba9-ca271e853129',
    //  #process.env.REACT_APP_CLIENT_ID ,
    authority: 'https://miazhang.ciamlogin.com/',
    redirectUri: '/', // Points to window.location.origin. You must register this URI on Azure Portal/App Registration.
    postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
    navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  },
  system: {
    // allowNativeBroker: false,
    loggerOptions: {
      loggerCallback(logLevel, message, containsPii) {
        if (containsPii) {
          return;
        }
        switch (logLevel) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};

export const loginRequest: PopupRequest = {
  scopes: [],
};
