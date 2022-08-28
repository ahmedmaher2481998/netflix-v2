import { createContext, useContext, useState } from 'react';
import { Container, Inner, Body, Frame, Header, Item, Title } from './styles/accordion';

const ShowToggleContext = createContext();

function Accordion({ children, ...restProps }) {
  return (
    <>
      <Container {...restProps}>
        <Inner>{children}</Inner>
      </Container>
    </>
  );
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [showToggle, setShowToggle] = useState(false);

  return (
    <ShowToggleContext.Provider value={{ showToggle, setShowToggle }}>
      <Item {...restProps}> {children}</Item>
    </ShowToggleContext.Provider>
  );
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}> {children}</Frame>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { setShowToggle, showToggle } = useContext(ShowToggleContext);
  return (
    <Header onClick={() => setShowToggle((pre) => !pre)} {...restProps}>
      {children}
      {showToggle ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { showToggle } = useContext(ShowToggleContext);
  return showToggle ? (
    <Body className={showToggle ? 'open' : 'closed'} {...restProps}>
      {children}
    </Body>
  ) : null;
};

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}> {children}</Title>;
};

export default Accordion;
