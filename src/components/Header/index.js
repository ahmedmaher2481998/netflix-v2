import { Background, ButtonLink, Frame, Logo } from './styles/Header';
import { Link as ReachRouterLink } from 'react-router-dom';
const Header = ({ bg = true, children, ...restProps }) => {
  return bg ? <Background {...restProps}>{children}</Background> : children;
};

Header.Logo = function HeaderLogo({ to, children, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps}>{children}</Logo>
    </ReachRouterLink>
  );
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

export default Header;
