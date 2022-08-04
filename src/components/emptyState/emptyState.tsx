import { memo } from 'react';

import { DivEmptyState } from './emptyState.styles';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import { Button, ButtonProps } from '@rm-monorepo/button/lib/button/src';

interface IEmptyState {
  imagem: string;
  titulo: string;
  descricao: string | React.ReactNode;
  botao?: ButtonProps;
}

const EmptyState = ({ imagem, titulo, descricao, botao }: IEmptyState) => {
  return (
    <DivEmptyState>
      <div>
        <img src={imagem} alt="Ilustração de Vazio" width="350" />
      </div>
      <div>
        <Typography size="xl" weight="bold">
          {titulo}
        </Typography>
      </div>
      <div>{descricao}</div>
      {botao && (
        <div style={{ margin: '16px', paddingBottom: '16px' }}>
          <Button {...botao} />
        </div>
      )}
    </DivEmptyState>
  );
};

export default memo(EmptyState);

