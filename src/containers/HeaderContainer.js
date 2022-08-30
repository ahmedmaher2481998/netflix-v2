import React from 'react';
import { Header } from '../components/';
import * as routes from '../constants/routes';
const HeaderContainer = ({ children }) => {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo
          to={routes.Home}
          viewBox="0 0 111 30"
          className="svg-icon svg-icon-netflix-logo"
          aria-hidden="true"
          focusable="false"
          alt="Netflix"
        />
        <Header.ButtonLink to={routes.SignIn}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
};

export default HeaderContainer;
