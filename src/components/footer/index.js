import React from 'react'
import { Title, Row, Column, Container, Link, Text, Break } from './styles/footer'

function Footer({ children, ...resProps }) {
  return <Container>{children}</Container>
}

Footer.Title = function ({ children, ...resProps }) {
  return <Title {...resProps}> {children}</Title>;
};
Footer.Row = function ({ children, ...resProps }) {
  return <Row {...resProps}> {children}</Row>;
};

Footer.Column = function ({ children, ...resProps }) {
  return <Column {...resProps}> {children}</Column>;
};

Footer.Link = function ({ children, ...resProps }) {
  return <Link {...resProps}> {children}</Link>;
};

Footer.Text = function ({ children, ...resProps }) {
  return <Text {...resProps}> {children}</Text>;
};

Footer.Break = function ({ children, ...resProps }) {
  return <Break {...resProps}> {children}</Break>;
};

export default Footer;
