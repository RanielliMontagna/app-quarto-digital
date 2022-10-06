import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Drawer } from '@rm-monorepo/drawer';

import { OpcoesMenu } from './drawer.static';

export const DrawerWithoutMemo = () => {
  const _navigate = useNavigate();

  return (
    <Drawer>
      <Drawer.Header onClick={() => _navigate('/')}>
        <img src="/assets/logo/logoSimplificadoBranco.svg" alt="Logo" />
      </Drawer.Header>
      <Drawer.Content>
        {OpcoesMenu?.map(({ caminho, icone, titulo }, key) => (
          <Drawer.Item key={key} path={caminho} onClick={() => _navigate(caminho)} icon={icone}>
            {titulo}
          </Drawer.Item>
        ))}
      </Drawer.Content>
    </Drawer>
  );
};

export default memo(DrawerWithoutMemo);

