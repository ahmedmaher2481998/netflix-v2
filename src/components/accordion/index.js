import { createContext, useContext, useState } from 'react';
import { Container, Inner, Body, Frame, Header, Item, Title } from './styles/accordion';

const ShowToggleContext = createContext();

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
  const [showToggle, setShowToggle] = useState(false);

  return (
    <ShowToggleContext.Provider value={{ showToggle, setShowToggle }}>
      <Item {...resProps}> {children}</Item>
    </ShowToggleContext.Provider>
  );
};

Accordion.Frame = function AccordionFrame({ children, ...resProps }) {
  return <Frame {...resProps}> {children}</Frame>;
};

Accordion.Header = function AccordionHeader({ children, ...resProps }) {
  const { setShowToggle, showToggle } = useContext(ShowToggleContext);
  return (
    <Header onClick={() => setShowToggle((pre) => !pre)} {...resProps}>
      {children}
      {showToggle ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...resProps }) {
  const { showToggle } = useContext(ShowToggleContext);
  return showToggle ? <Body {...resProps}> {children}</Body> : null;
};

Accordion.Title = function AccordionTitle({ children, ...resProps }) {
  return <Title {...resProps}> {children}</Title>;
};

export default Accordion;
