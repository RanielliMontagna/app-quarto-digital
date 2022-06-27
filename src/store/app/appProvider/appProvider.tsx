import { FC, memo } from 'react';

import { useSelector } from 'hooks';

import AppContext from '../appContext/appContext';

import useHandleError from './useHandleError/useHandleError';
import useNotification from './useNotification/useNotification';

const AppProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const app = useSelector(({ App }) => App);

  // Lógica para tratar erros
  useHandleError();

  // Lógica para tratar notificações
  useNotification();

  return <AppContext.Provider value={app}>{children}</AppContext.Provider>;
};

export default memo(AppProvider);
