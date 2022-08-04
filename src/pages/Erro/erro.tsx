import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import { Button } from '@rm-monorepo/button/lib/button/src';

import { DivErro } from './erro.styles';

export const Erro = () => {
  const ilustracao = './assets/svgs/erro/ilustracao.svg';
  const navigate = useNavigate();

  return (
    <DivErro>
      <img src={ilustracao} alt="imagemErro" />
      <Typography size="xl" weight="bold" style={{ textAlign: 'center' }}>
        Não conseguimos encontrar essa página.
      </Typography>
      <Typography size="md" style={{ textAlign: 'center' }}>
        Essa página não existe ou foi removida! <br />
        Nós recomendamos que você volte para a página inicial.
      </Typography>
      <div>
        <Button onClick={() => navigate('/')}>Voltar para página inicial</Button>
      </div>
    </DivErro>
  );
};

export default memo(Erro);

