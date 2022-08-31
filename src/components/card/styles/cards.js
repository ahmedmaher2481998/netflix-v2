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
export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background-color: #0000008f;
`;

export const Maturity = styled.div`
  background-color: ${(rating) => (rating >= 15 ? 'red' : 'green')};
  border-radius: 15px;
  width: 28px;
  line-height: 28px;
  text-align: center;
  color: white;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 12px;
  margin-right: 10px;
`;

export const Content = styled.div`
  margin: 24px;
  max-width: 500px;
  line-height: normal;
  @media (max-width: 1000px) {
    margin: 30px;
    max-width: none;
  }
`;
