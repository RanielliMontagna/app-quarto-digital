import { FC, ReactElement } from 'react';
import { DivCard } from './card.styles';

interface CardProps {
  icone: ReactElement;
  titulo: string;
}

const Card: FC<CardProps> = ({ icone, titulo }) => {
  return (
    <div style={{ position: 'relative' }}>
      <DivCard>
        <div>{icone}</div>
        <h2>{titulo}</h2>
      </DivCard>
    </div>
  );
};

export default Card;
