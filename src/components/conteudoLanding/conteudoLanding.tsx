import { FC, memo } from 'react';
import { Divider } from 'components';
import * as styled from './conteudoLanding.styles';

interface ConteudoLandingProps {
  titulo: string;
  texto: React.ReactNode;
  imagem?: string;
}

const ConteudoLanding: FC<ConteudoLandingProps> = ({ titulo, texto, imagem }) => {
  return (
    <styled.DivConteudo>
      <styled.DivTexto>
        <h1>{titulo}</h1>
        <Divider styles={{ margin: '0px 0px 16px 0px', width: '160px' }} />
        <p>{texto}</p>
      </styled.DivTexto>
      <styled.DivImagem>
        <styled.Imagem src={imagem} alt={imagem} />
      </styled.DivImagem>
    </styled.DivConteudo>
  );
};

export default memo(ConteudoLanding);
