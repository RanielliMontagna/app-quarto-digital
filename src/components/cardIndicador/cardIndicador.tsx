import { FC, memo } from 'react';
import * as styled from './cardIndicador.styles';
interface CardIndicadorProps {
  titulo: string;
  valor: number;
  index: number;
}

const CardIndicador: FC<CardIndicadorProps> = ({ titulo, valor, index }) => {
  return <styled.CardIndicador></styled.CardIndicador>;
};

export default memo(CardIndicador);
