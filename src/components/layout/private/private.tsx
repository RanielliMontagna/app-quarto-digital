import { memo } from 'react';
import { Outlet } from 'react-router-dom';

import * as styled from './private.styles';

import { AppBar, Drawer } from 'components';
import { ConfiguracoesProvider, useApp } from 'store';
import { usePathname } from 'utils';

import Loading from '@rm-monorepo/loading';

const Private = () => {
  const { loading } = useApp();
  const pathname = usePathname();

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      {loading && <Loading />}

      {pathname !== 'erro' && (
        <styled.DivDrawer>
          <Drawer />
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

