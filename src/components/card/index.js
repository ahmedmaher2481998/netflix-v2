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
      }}></FeatureContext.Provider>
  );
};

export default Card;
