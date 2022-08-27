import React from 'react';
import { Inner, Item, Pane, Container, Image, Subtitle, Title } from './styles/jumbotron';

function JumboTron({ children, direction = 'row', ...restProps }) {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}

JumboTron.Container = function ({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

JumboTron.Pane = function ({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

JumboTron.Title = function ({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

JumboTron.Subtitle = function ({ children, ...restProps }) {
  return <Subtitle {...restProps}>{children}</Subtitle>;
};

JumboTron.Image = function ({ ...restProps }) {
  return <Image {...restProps} />;
};

export default JumboTron;
