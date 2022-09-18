import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Auth0Provider } from "@auth0/auth0-react";
import configData from "./config.json";

const providerConfig = {
  domain: configData.domain,
  clientId: configData.clientId,
  audience: configData.audience,
  redirectUri: window.location.origin,
  useRefreshTokens: true,
  cacheLocation: "localstorage"
};

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider {...providerConfig}>
    <App />
  </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);