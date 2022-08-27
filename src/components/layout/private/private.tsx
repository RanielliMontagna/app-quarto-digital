import { Fragment, memo } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import crypto from 'crypto';
import { FiMoon, FiSun } from 'react-icons/fi';
import { IoChevronDownOutline, IoExitOutline } from 'react-icons/io5';

import * as styled from './private.styles';
import { usePrivate } from './usePrivate';

import { Tooltip } from '@mui/material';
import { Loading } from '@rm-monorepo/loading';
import { Menu, MenuItemConteudo } from '@rm-monorepo/menu';
import { AppBar } from '@rm-monorepo/app-bar';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import { MenuDivider, MenuItem } from '@szhsin/react-menu';

import { Drawer, DrawerMobile } from 'components';
import { ConfiguracoesProvider, useApp } from 'store';
import { useAuth } from 'store/auth';
import { usePathname } from 'utils';
import { ItemsMenuAppBar } from './private.static';

const Private = () => {
  const _navigate = useNavigate();
  const pathname = usePathname();
  const { profile } = useAuth();
  const { loading, tema } = useApp();
  const { handleMudarTema, handleSair } = usePrivate();

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {loading && <Loading />}

      {pathname !== 'erro' && (
        <styled.DivDrawer>
          <Drawer />
        </styled.DivDrawer>
      )}

      <ConfiguracoesProvider>
        <styled.DivChildren tema={tema}>
          {pathname !== 'erro' && (
            <AppBar>
              <AppBar.LeftSide>
                <styled.DivDrawerMobile>
                  <DrawerMobile />
                </styled.DivDrawerMobile>
                <Tooltip title={<Typography>Trocar tema</Typography>} placement="bottom" arrow>
                  <styled.DivTema onClick={handleMudarTema}>
                    {tema === 'escuro' ? <FiSun size={24} /> : <FiMoon size={24} />}
                  </styled.DivTema>
                </Tooltip>
              </AppBar.LeftSide>
              <AppBar.RightSide>
                <div style={{ height: '100%' }}>
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
                      {ItemsMenuAppBar.map(({ icon, label, route }) => {
                        return (
                          <Fragment key={crypto.randomBytes(8).toString('hex')}>
                            <MenuItem onClick={() => _navigate(route)}>{MenuItemConteudo(label, icon)}</MenuItem>
                          </Fragment>
                        );
                      })}
                      <MenuDivider />
                      <MenuItem onClick={handleSair}>{MenuItemConteudo('Sair', <IoExitOutline size={16} />)}</MenuItem>
                    </>
                  </Menu>
                </div>
              </AppBar.RightSide>
            </AppBar>
          )}
          <Outlet />
        </styled.DivChildren>
      </ConfiguracoesProvider>
    </div>
  );
};

export default memo(Private);

