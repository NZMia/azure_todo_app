import React from 'react';
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from '@azure/msal-react';
import { loginRequest } from '../authConfig';
import { Breadcrumb, Layout, Menu, theme, Button } from 'antd';

const { Header, Content, Footer } = Layout;

const NavigationBar: React.FC = () => {
  const { instance } = useMsal();
  const handleLoginRedirect = () => {
    console.log('loginRedirect');
    instance
      .loginRedirect({ ...loginRequest, prompt: 'create' })
      .catch((error) => console.log(error));
  };

  const handleLogoutRedirect = () => {
    instance.logoutRedirect().catch((error) => console.log(error));
  };
  return (
    <Header style={{ display: 'flex', alignItems: 'center' }}>
      <div className='demo-logo'>
        {/* <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items}
        style={{ flex: 1, minWidth: 0 }}
      /> */}
        <AuthenticatedTemplate>
          <div className='collapse navbar-collapse justify-content-end'>
            <Button onClick={handleLogoutRedirect}>Sign out</Button>
          </div>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <div className='collapse navbar-collapse justify-content-end'>
            <Button onClick={handleLoginRedirect}>Sign in</Button>
          </div>
        </UnauthenticatedTemplate>
      </div>
    </Header>
  );
};

export default NavigationBar;
