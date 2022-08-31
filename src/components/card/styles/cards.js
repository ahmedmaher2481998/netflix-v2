import styled from 'styled-components/macro';

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-left: 56px;
  margin-right: 56px;
  margin-top: 0;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  > ${Title} {
    @media (max-width: 1000px) {
      margin-left: 30px;
    }
  }
`;

export const SubTitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Item = styled.div``;
export const Image = styled.img``;
export const Feature = styled.div``;
export const FeatureTitle = styled.h2``;
export const FeatureText = styled.p``;
export const FeatureClose = styled.div``;
export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection === 'row' ? 'row' : 'column')};
  ${({ alignItems }) => alignItems && `align-items:${alignItems};`}
  ${({ margin }) => margin && `margin:${margin};`}

  > ${Container}:first-of-type {
    @media (max-width: 1100px) {
      margin-top: -100px;
    }
  }
`;
export const Text = styled.p``;
export const Entities = styled.div``;
export const Meta = styled.div``;
export const Maturity = styled.div``;
export const Content = styled.div``;
