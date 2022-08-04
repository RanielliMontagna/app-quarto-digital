import { FC, memo } from 'react';
import { PageHeader } from '@rm-monorepo/page-header/lib/pageHeader/src';
import * as styled from './paginaBase.styles';
import { ButtonProps } from '@rm-monorepo/button/lib/button/src';

interface PaginaBaseProps {
  titulo: string;
  button?: ButtonProps;
  children: React.ReactElement;
  // Elemento que será renderizado alinhado à direita do pageHeader
  right?: React.ReactNode;
}

const PaginaBase: FC<PaginaBaseProps> = ({ titulo, children, button, right }) => {
  return (
    <div style={{ height: 'calc(100% - 60px)', overflow: 'auto', display: 'flex', flexDirection: 'column' }}>
      <div>
        <PageHeader titulo={titulo} button={button} right={right} />
      </div>
      <styled.DivGeral>{children}</styled.DivGeral>
    </div>
  );
};

export default memo(PaginaBase);

