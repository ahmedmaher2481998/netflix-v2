import { Container, Item, List, Name, Picture, Title } from './styles/profiles';
import React from 'react';

const Profile = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

Profile.Title = function ProfileTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};
Profile.List = function ProfileList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Profile.Name = function ProfileName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};
Profile.User = function ProfileUser({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};
Profile.Picture = function ProfilePicture({ src, ...rest }) {
  return <Picture {...rest} src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'} />;
};

export default Profile;
