import React from 'react';
import { Title, Row, Column, Container, Link, Text, Break } from './styles/footer';

 Footer({ children, ...resProps }) =>{
  return <Container>{children}</Container>;
}

Footer.Title =  ({ children, ...resProps }) =>{
  return <Title {...resProps}> {children}</Title>;
};
Footer.Row =  ({ children, ...resProps }) =>{
  return <Row {...resProps}> {children}</Row>;
};

Footer.Column =  ({ children, ...resProps }) =>{
  return <Column {...resProps}> {children}</Column>;
};

Footer.Link =  ({ children, ...resProps }) =>{
  return <Link {...resProps}> {children}</Link>;
};

Footer.Text =  ({ children, ...resProps }) =>{
  return <Text {...resProps}> {children}</Text>;
};

Footer.Break =  ({ children, ...resProps }) =>{
  return <Break {...resProps}> {children}</Break>;
};

export default Footer;
