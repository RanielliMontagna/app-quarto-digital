import { FC } from 'react';
import { DivItens } from './itensInfo.styles';
import { ItensInfoProps } from './itensInfo.types';

const ItensInfo: FC<ItensInfoProps> = ({ icone, link, texto }) => {
  return (
    <DivItens onClick={() => window.open(link, '_blank')}>
      <div style={{ display: 'flex', alignItems: 'center', marginRight: '4px' }}>{icone}</div>
      <div>{texto}</div>
    </DivItens>
  );
};

export default ItensInfo;
