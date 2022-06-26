import { ConteudoLanding } from 'components';
import * as styled from './sobre.styles';

const Sobre = () => {
  return (
    <styled.Sobre id="sobre">
      <ConteudoLanding
        titulo="Sobre nós"
        texto={
          <>
            Tudo que fazemos é focado em como podemos ajudar clientes a atingir melhores resultados. A zona de conforto
            não é lugar onde as grandes conquistas acontecem. <br />
            Por isso, estudamos, aprendemos e aplicamos novos conhecimentos todos os dias. O sistema do Quarto Digital
            está em todas as etapas da experiência do hóspede. Pensamos em cada detalhe, para que o hoteleiro possa
            entrar a melhor estadia ao seu hóspede.
          </>
        }
        imagem="static/svgs/cama.svg"
      />
    </styled.Sobre>
  );
};

export default Sobre;
