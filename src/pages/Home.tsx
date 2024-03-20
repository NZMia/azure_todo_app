import React from 'react';
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react';

const Home: React.FC = () => {
  return (
    <>
      <UnauthenticatedTemplate>
        <h1>Welcome to the home page!</h1>
      </UnauthenticatedTemplate>

      <AuthenticatedTemplate>
        <h1>Welcome to the profile page!</h1>
      </AuthenticatedTemplate>
    </>
  );
};

export default Home;
