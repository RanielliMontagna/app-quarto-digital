import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import { cinzaClaro } from 'themes';
import { ContainerBase, DivAbsoluta } from './card.styles';
import type { ICard } from './card.types';

const Card = ({ titulo, valor, icone, background }: ICard) => {
  return (
    <ContainerBase>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'center',
          height: '100%',
          gap: '4px',
        }}
      >
        <Typography weight="bold" size="lg">
          {valor}
        </Typography>
        <Typography style={{ color: cinzaClaro }} size="sm">
          {titulo}
        </Typography>
        <DivAbsoluta background={background}>{icone}</DivAbsoluta>
      </div>
    </ContainerBase>
  );
};

export default Card;

