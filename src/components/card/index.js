import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  Item,
  Image,
  Feature,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Group,
  Text,
  Entities,
  Meta,
  Maturity,
  Content
} from './styles/cards';
import { useContext, createContext, useState } from 'react';
const FeatureContext = createContext();
const Card = ({ children, ...rest }) => {
  const [showFeature, setShowFeature] = useState(false);
  const [itemFeature, setItemFeature] = useState({});
  return (
    <FeatureContext.Provider
      value={{
        showFeature,
        setShowFeature,
        itemFeature,
        setItemFeature
      }}>
      <Container {...rest}>{children}</Container>
    </FeatureContext.Provider>
  );
};
Card.Group = function CardGroup({ children, ...rest }) {
  return <Group {...rest}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};
Card.SubTitle = function CardSubTitle({ children, ...rest }) {
  return <SubTitle {...rest}>{children}</SubTitle>;
};
Card.Text = function CardText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Card.Item = function CardItem({ item, children, ...rest }) {
  const { setItemFeature, setShowFeature } = useContext(FeatureContext);
  return (
    <Item
      onClick={() => {
        setItemFeature(item);
        setShowFeature(true);
      }}
      {...rest}>
      {children}
    </Item>
  );
};

Card.Image = function CardImage({ ...rest }) {
  return <Image {...rest} />;
};
Card.Meta = function CardMeta({ children, ...rest }) {
  return <Meta {...rest}>{children}</Meta>;
};
Card.Entities = function CardEntities({ children, ...rest }) {
  return <Entities {...rest}>{children}</Entities>;
};

Card.Feature = function CardFeature({ children, category, ...rest }) {
  const { setItemFeature, itemFeature, showFeature, setShowFeature } = useContext(FeatureContext);
  return <Feature {...rest}> {children} </Feature>;
};

export default Card;
