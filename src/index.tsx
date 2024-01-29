import React from 'react';
import {Routes,Route} from 'react-router-dom';
import { createRoot} from 'react-dom/client'
import './global.scss';
import App from './App';
import {BrowserRouter, Router} from "react-router-dom"
import reportWebVitals from './reportWebVitals';
import { Auth0Provider, Auth0ProviderOptions } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

const auth0ProviderOptions: Auth0ProviderOptions = {
  domain: domain!,
  clientId: clientId!,
  //redirectUri: window.location.origin,
};

const root = createRoot(document.getElementById('root')!);

root.render(
  <BrowserRouter >
     <Auth0Provider {...auth0ProviderOptions}>
      <App />
      </Auth0Provider>
  </BrowserRouter>
 
);
