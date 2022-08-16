import { memo } from 'react';

import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import { CardBody, CardHeader, ContainerCard } from './cardQuarto.styles';

interface ICardQuarto {
  identificador: number;
}

const CardQuarto = ({ identificador }: ICardQuarto) => {
  return (
    <ContainerCard>
      <CardHeader>
        <Typography weight="bold">{String(identificador).padStart(3, '0')}</Typography>
      </CardHeader>
      <CardBody></CardBody>
    </ContainerCard>
  );
};

export default memo(CardQuarto);

