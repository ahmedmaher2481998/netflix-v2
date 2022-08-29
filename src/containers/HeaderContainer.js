import React from 'react';
import { Header } from '../components/';
import * as routers from '../constants/routes';
const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={routers.Home}
          viewBox="0 0 111 30"
          className="svg-icon svg-icon-netflix-logo"
          aria-hidden="true"
          focusable="false"
          alt="Netflix"
        />
        <Header.ButtonLink to={routers.SignIn}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};

export default HeaderContainer;
