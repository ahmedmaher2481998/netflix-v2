import { Container, Item, List, Name, Picture, Title } from './styles/profiles';
import React from 'react';

const Profile = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

Profile.Title = function ProfileTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

export default Profile;
