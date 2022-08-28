import { Background, ButtonLink, Frame, Logo } from './styles/Header';

const Header = ({ bg, Children, ...restProps }) => {
  return bg ? <Background {...restProps}>{Children}</Background> : Children;
};

Header.Logo = function HeaderLogo({ children, ...restProps }) {
  return <Logo {...restProps}>{children}</Logo>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

export default Header;
