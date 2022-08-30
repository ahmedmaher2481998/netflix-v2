import styled from 'styled-components/macro';
import { Link as ReactLinkButton } from 'react-router-dom';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.35),
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.35)
    ),
    url(${({ src }) => (src ? `../images/misc/${src}.jpg` : '../images/misc/home-bg.jpg')}) top left /
      cover no-repeat;
  @media (max-width: 1100px) {
    ${({ hideOnSmallScreen }) => hideOnSmallScreen && `background: none;`}
  }
`;

export const Logo = styled.svg`
  height: 36px;
  width: 134px;
  margin-right: 40px;
  filter: invert(12%) sepia(100%) saturate(7394%) hue-rotate(355deg) brightness(99%) contrast(97%);
  cursor: pointer;
  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }
`;

export const ButtonLink = styled(ReactLinkButton)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #f40612;
  }
`;
export const Frame = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;
export const Link = styled.p`
  color: #fff;
  text-decoration: none;
  margin-right: 30px;
  font-weight: ${({ active }) => (active === 'true' ? '700' : 'normal')};
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &:last-of-type {
    margin-right: 0;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const Feature = styled(Frame)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  @media (max-width: 1100px) {
    display: none;
  }
`;
export const Dropdown = styled.div`
  border-radius: 5px;
  display: none;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
  width: 150px;
  top: 32px;
  right: 10px;

  ${Group}:last-of-type ${Link} {
    cursor: pointer;
  }
  ${Group} {
    margin-bottom: 10px;
    &:last-of-type {
      margin-bottom: 0;
    }
    ${Link} {
      cursor: pointer;
    }
    ${Picture} {
      cursor: default;
    }
  }
  button {
    margin-right: 10px;
  }
  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
`;
export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;
  button {
    cursor: pointer;
  }
  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;
export const Search = styled.div``;
export const SearchInput = styled.input``;
export const SearchIcon = styled.button``;
