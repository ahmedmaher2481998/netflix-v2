import React from 'react';
import { Container, Inner, Body, Frame, Header, Item, Title } from './styles/accordion';
function Accordion({ children, ...resProps }) {
  return (
    <>
      <Container>
        <Inner {...resProps}>{children}</Inner>
      </Container>
    </>
  );
}

Accordion.Item = function AccordionItem({ children, ...resProps }) {
  return <Item {...resProps}> {children}</Item>;
};

Accordion.Frame = function AccordionFrame({ children, ...resProps }) {
  return <Frame {...resProps}> {children}</Frame>;
};

Accordion.Header = function AccordionHeader({ children, ...resProps }) {
  return <Header {...resProps}> {children}</Header>;
};

Accordion.Body = function AccordionBody({ children, ...resProps }) {
  return <Body {...resProps}> {children}</Body>;
};

Accordion.Title = function AccordionTitle({ children, ...resProps }) {
  return <Title {...resProps}> {children}</Title>;
};

export default Accordion;
