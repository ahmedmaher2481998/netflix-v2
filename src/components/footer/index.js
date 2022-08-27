import React from 'react';
import { Title, Row, Column, Container, Link, Text, Break } from './styles/footer';

const Footer = function FooterFooter({ children, ...resProps }) {
  return <Container>{children}</Container>;
};

Footer.Title = function FooterTitle({ children, ...resProps }) {
  return <Title {...resProps}> {children}</Title>;
};
Footer.Row = function FooterRow({ children, ...resProps }) {
  return <Row {...resProps}> {children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...resProps }) {
  return <Column {...resProps}> {children}</Column>;
};

Footer.Link = function FooterLink({ children, ...resProps }) {
  return <Link {...resProps}> {children}</Link>;
};

Footer.Text = function FooterText({ children, ...resProps }) {
  return <Text {...resProps}> {children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...resProps }) {
  return <Break {...resProps}> {children}</Break>;
};

export default Footer;
