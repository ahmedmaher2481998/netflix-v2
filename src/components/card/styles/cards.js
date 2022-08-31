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

export const SubTitle = styled.p``;
export const Item = styled.div``;
export const Image = styled.img``;
export const Feature = styled.div``;
export const FeatureTitle = styled.h2``;
export const FeatureText = styled.p``;
export const FeatureClose = styled.div``;
export const Group = styled.div``;
export const Text = styled.p``;
export const Entities = styled.div``;
export const Meta = styled.div``;
export const Maturity = styled.div``;
export const Content = styled.div``;
