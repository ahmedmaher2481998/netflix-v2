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
        setItemFeature(() => item);
        setShowFeature(true);
        console.log('you selected ', item);
        console.log('selected');
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
  const { itemFeature, showFeature, setShowFeature } = useContext(FeatureContext);
  return showFeature ? (
    <Feature
      {...rest}
      src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
      <Content>
        <FeatureTitle>{itemFeature.title}</FeatureTitle>
        <FeatureText>{itemFeature.description}</FeatureText>

        <FeatureClose onClick={() => setShowFeature(false)}>
          <img src="/images/icons/close.png" alt="Close" />
        </FeatureClose>
        <Group margin="30px 0" flexDirection="row" alignItems="center">
          <Maturity rating={itemFeature.maturity}>
            {itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}
          </Maturity>
          <FeatureText fontWeight="bold">
            {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
          </FeatureText>
        </Group>
        {children}
      </Content>
    </Feature>
  ) : null;
};

export default Card;
