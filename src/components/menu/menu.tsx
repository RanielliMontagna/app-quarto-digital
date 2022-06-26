import { FC, memo } from 'react';
import { useApp } from 'store';
import * as styled from './menu.styles';
import { MenuProps as MenuPropsSzhsin } from '@szhsin/react-menu';

interface MenuProps extends MenuPropsSzhsin {
  children: JSX.Element;
}

export const MenuItemConteudo = (titulo: string, icone?: JSX.Element) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
      {icone && <styled.MenuItemIcone>{icone}</styled.MenuItemIcone>}
      <div style={{ margin: '0px 8px' }}>
        <styled.MenuItemTitulo>{titulo}</styled.MenuItemTitulo>
      </div>
    </div>
  );
};

const Menu: FC<MenuProps> = ({ menuButton, align, offsetY, offsetX, children }) => {
  const { tema } = useApp();

  return (
    <styled.Menu tema={tema} menuButton={menuButton} align={align} offsetY={offsetY} offsetX={offsetX} arrow transition>
      {children}
    </styled.Menu>
  );
};

export default memo(Menu);
