import { memo } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import * as styled from './private.styles';
import { Drawer } from '@rm-monorepo/drawer';

import { AppBar, OpcoesMenu } from 'components';
import { ConfiguracoesProvider, useApp } from 'store';
import { usePathname } from 'utils';

import Loading from '@rm-monorepo/loading';

const Private = () => {
  const { loading } = useApp();
  const pathname = usePathname();
  const _navigate = useNavigate();

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {loading && <Loading />}

      {pathname !== 'erro' && (
        <styled.DivDrawer>
          <Drawer>
            <Drawer.Header onClick={() => _navigate('/')}>
              <img src="/assets/logo/logoSimplificadoBranco.svg" alt="Logo" />
            </Drawer.Header>
            <Drawer.Content>
              {OpcoesMenu.map(({ caminho, icone, titulo }) => (
                <Drawer.Item path={caminho} onClick={() => _navigate(caminho)} icon={icone}>
                  {titulo}
                </Drawer.Item>
              ))}
            </Drawer.Content>
          </Drawer>
        </styled.DivDrawer>
      )}

      <ConfiguracoesProvider>
        <styled.DivChildren>
          {pathname !== 'erro' && <AppBar />}
          <Outlet />
        </styled.DivChildren>
      </ConfiguracoesProvider>
    </div>
  );
};

export default memo(Private);

