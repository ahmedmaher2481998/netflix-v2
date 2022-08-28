import { Container, Break, Title, SubTitle } from './styles/Feature';
import React from 'react';

const Feature = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.Break = function FeatureBreak({ children, ...restProps }) {
  return <Break {...restProps}>{children}</Break>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

export default Feature;
