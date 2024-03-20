import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

import { IPublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';

import { CustomNavigationClient } from './utils/NavigationClient';

import NavigationBar from './components/NavigationBar';
import AppRoutes from './AppRoutes';
type AppProps = {
  pca: IPublicClientApplication;
};

const App: React.FC<AppProps> = ({ pca }) => {
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  return (
    <MsalProvider instance={pca}>
      <>
        <AppRoutes />
      </>
    </MsalProvider>
  );
};

export default App;
