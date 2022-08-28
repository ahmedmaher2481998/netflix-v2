import JumbotronContainer from '../containers/JumbotronContainer';
import FooterContainer from '../containers/FooterContainer';
import FAQContainer from '../containers/FAQContainer';
import HeaderContainer from '../containers/HeaderContainer';
const Home = () => {
  return (
    <>
      {/* <HeaderContainer></HeaderContainer> */}
      <JumbotronContainer />
      <FAQContainer />
      <FooterContainer />
    </>
  );
};

export default Home;
