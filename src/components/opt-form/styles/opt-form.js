import styled from 'styled-components/macro';
export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 20px;
  flex-wrap: wrap;
  &:active {
    outline: none;
    border: none;
  }
  @media (max-width: 600) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;
export const Input = styled.input`
  width: 450px;
  border: 0;
  padding: 10px;
  height: 70px;
  box-sizing: border-box;
`;
export const Button = styled.button`
  height: 70px;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  background-color: #e50914;
  &:hover {
    background-color: #f40612;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 24px;
    @media (max-width: 1000px) {
      width: 16px;
    }
  }
  @media (max-width: 1000px) {
    height: 50px;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;
export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 22px;
  }
`;
