import { FC, memo } from 'react';
import * as styled from './drawer.styles';
import Botoes from './botoes/botoes';

interface DrawerProps {}

const Drawer: FC<DrawerProps> = () => {
  const logo = '/static/logo/logoSimplificadoBranco.svg';

  return (
    <styled.DivMenu>
      <styled.DivLogo>
        <img src={logo} alt={logo} style={{ width: '40px' }} />
      </styled.DivLogo>
      <Botoes />
    </styled.DivMenu>
  );
};

export default memo(Drawer);
