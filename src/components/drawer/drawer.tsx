import { memo } from 'react';
import { Drawer } from '@rm-monorepo/drawer';

export const DrawerWithoutMemo = () => {
  return (
    <Drawer>
      <Drawer.Header onClick={() => {}}>
        <img src="/assets/logo/logoSimplificadoBranco.svg" alt="Logo" />
      </Drawer.Header>
      <Drawer.Content>
        <></>
      </Drawer.Content>
    </Drawer>
  );
};

export default memo(DrawerWithoutMemo);

