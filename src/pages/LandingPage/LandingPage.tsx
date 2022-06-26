import { Footer, TitleBar } from 'components';
import Intro from './intro/intro';
import * as styled from './landingPage.styles';
import Sobre from './sobre/sobre';
import Segmentos from './segmentos/segmentos';

const LandingPage = () => {
  return (
    <styled.Geral>
      <TitleBar rota="home" />
      <Intro />
      <Sobre />
      <Segmentos />
      <Footer />
    </styled.Geral>
  );
};

export default LandingPage;
