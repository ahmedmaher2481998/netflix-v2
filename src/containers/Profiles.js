import React from 'react';
import { Profiles } from '../components';
import * as routes from '../constants/routes';
import { Header } from '../components';
const SelectProfileContainer = ({ user, setProfile }) => {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={routes.Home}
            viewBox="0 0 111 30"
            className="svg-icon svg-icon-netflix-logo"
            aria-hidden="true"
            focusable="false"
            alt="Netflix"
          />
        </Header.Frame>
      </Header>
      <Profiles>
        <Profiles.Title>How is watching ? </Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => {
              console.log('clicked');
              setProfile(() => ({
                displayName: user.displayName,
                photoURL: user.photoURL
              }));
            }}>
            <Profiles.Picture src={user.photoURL} />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
};

export default SelectProfileContainer;
