import { Fragment, memo } from 'react';
import crypto from 'crypto';
import { useNavigate } from 'react-router-dom';
import { IoChevronDownOutline, IoExitOutline } from 'react-icons/io5';
import { FiMoon, FiSun } from 'react-icons/fi';

import { MenuDivider, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

import { Tooltip } from '@mui/material';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';

import { Menu, MenuItemConteudo, DrawerMobile } from 'components';
import { useApp } from 'store';
import * as styled from './appBar.styles';
import { ItemsMenu } from './appBar.static';
import { useAuth } from 'store/auth';
import { useAppBar } from './useAppBar';

const AppBar = () => {
  const navigate = useNavigate();
  const { tema } = useApp();
  const { profile } = useAuth();

  const { handleMudarTema, handleSair } = useAppBar();

  return (
    <styled.DivAppBar tema={tema}>
      <div style={{ display: 'flex', height: '100%' }}>
        <styled.DivDrawer>
          <DrawerMobile />
        </styled.DivDrawer>
        <Tooltip title={<Typography>Trocar tema</Typography>} placement="bottom" arrow>
          <styled.DivTema onClick={handleMudarTema}>
            {tema === 'escuro' ? <FiSun size={24} /> : <FiMoon size={24} />}
          </styled.DivTema>
        </Tooltip>
      </div>
      <styled.DivPerfil>
        <Menu
          align="end"
          menuButton={
            <styled.DivMenu>
              <div>
                <styled.styledAvatar alt={profile?.nome} src={profile?.nome} variant="rounded" />
              </div>
              <div style={{ padding: '8px', overflow: 'hidden' }}>
                <styled.TituloPerfil>{profile?.nome}</styled.TituloPerfil>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <IoChevronDownOutline size={16} />
              </div>
            </styled.DivMenu>
          }
        >
          <>
            {ItemsMenu.map(({ icon, label, route }) => {
              return (
                <Fragment key={crypto.randomBytes(8).toString('hex')}>
                  <MenuItem onClick={() => navigate(route)}>{MenuItemConteudo(label, icon)}</MenuItem>
                </Fragment>
              );
            })}
            <MenuDivider />
            <MenuItem onClick={handleSair}>{MenuItemConteudo('Sair', <IoExitOutline size={16} />)}</MenuItem>
          </>
        </Menu>
      </styled.DivPerfil>
    </styled.DivAppBar>
  );
};

export default memo(AppBar);

