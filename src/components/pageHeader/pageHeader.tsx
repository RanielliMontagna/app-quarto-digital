import { FC, memo } from 'react';
import { Button, Typography } from 'components';
import * as styled from './pageHeader.styles';
import { ButtonProps } from 'components/button/button.types';
import { MdAdd } from 'react-icons/md';

interface PageHeaderProps {
  titulo: string;
  button?: ButtonProps;
  // Elemento que será renderizado alinhado à direita do pageHeader
  right?: React.ReactNode;
}

const PageHeader: FC<PageHeaderProps> = ({ titulo, button, right }) => {
  return (
    <styled.DivPageHeader>
      <div className="divTitulo">
        <Typography weight="bold" size="xl">
          {titulo}
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {right}
        {button && (
          <>
            <div className="botaoWeb">
              <Button {...button}>{button.children}</Button>
            </div>
            <div className="botaoMobile">
              <button onClick={button.onClick}>
                <MdAdd size={32} />
              </button>
            </div>
          </>
        )}
      </div>
    </styled.DivPageHeader>
  );
};

export default memo(PageHeader);
