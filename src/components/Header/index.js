import { Background, Container, LinkButton, Logo } from './styles/Header';

const Header = ({ bg, Children, ...restProps }) => {
  return bg ? <Background {...restProps}>{Children}</Background> : Children;
};

export default Header;
