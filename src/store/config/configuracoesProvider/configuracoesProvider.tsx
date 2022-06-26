import { useSelector } from 'hooks';
import { FC } from 'react';
import ConfiguracoesContext from '../configuracoesContext/configuracoesContext';

const ConfiguracoesProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const configuracoes = useSelector(({ Config }) => Config);

  return <ConfiguracoesContext.Provider value={configuracoes}>{children}</ConfiguracoesContext.Provider>;
};

export default ConfiguracoesProvider;
