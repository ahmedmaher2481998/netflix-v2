import React from 'react';
import { Header } from '../components/';
import * as routers from '../constants/routes';
import logo from '/images/logo.png';
const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={routers.Home} alt="Netflix" src={logo} />
        <Header.ButtonLink to={routers.SignIn}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};

export default HeaderContainer;
