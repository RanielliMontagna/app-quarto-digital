import { FC, memo } from 'react';
import { PageHeader } from 'components';
import * as styled from './paginaBase.styles';
import { ButtonProps } from 'components/button/button.types';

interface PaginaBaseProps {
  titulo: string;
  button?: ButtonProps;
  children: React.ReactElement;
}

const PaginaBase: FC<PaginaBaseProps> = ({ titulo, children, button }) => {
  return (
    <div style={{ height: 'calc(100% - 60px)', overflow: 'auto' }}>
      <div>
        <PageHeader titulo={titulo} button={button} />
      </div>
      <styled.DivGeral>{children}</styled.DivGeral>
    </div>
  );
};

export default memo(PaginaBase);
