import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import {
  MsalProvider,
  AuthenticatedTemplate,
  useMsal,
  UnauthenticatedTemplate,
} from '@azure/msal-react';
import { loginRequest } from './authConfig';
export const routes = [
  {
    path: '/',
    component: Home,
  },
];

const AppRoutes = () => {
  // return (
  //   <Routes>
  //     {routes.map((route, index) => (
  //       <Route key={index} path={route.path} element={<Home />} />
  //     ))}
  //   </Routes>
  // );
  const { instance } = useMsal();
  const activeAccount = instance.getActiveAccount();
  console.log(instance);
  const handleLoginRedirect = () => {
    instance.loginRedirect(loginRequest).catch((error) => console.log(error));
  };

  const handleLogoutRedirect = () => {
    instance.logoutRedirect().catch((error) => console.log(error));
  };
  return (
    <>
      <AuthenticatedTemplate>
        <p>{activeAccount?.idTokenClaims?.preferred_username}</p>
        <p>{activeAccount?.idTokenClaims?.name}</p>
        <button className='logoutButton' onClick={handleLogoutRedirect}>
          logout
        </button>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <button className='signInButton' onClick={handleLoginRedirect}>
          Sign up
        </button>
      </UnauthenticatedTemplate>
    </>
  );
};

export default AppRoutes;
