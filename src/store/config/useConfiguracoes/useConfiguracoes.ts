import { useContext } from 'react';
import ConfiguracoesContext from '../configuracoesContext/configuracoesContext';
import type { ConfiguracoesSlice } from '../configuracoesSlice.types';

const useConfiguracoes = (): ConfiguracoesSlice => {
  const context = useContext(ConfiguracoesContext);

  if (!context) {
    throw new Error('useConfiguracoes() deve estar dentro de um <ConfiguracoesProvider />');
  }

  return context;
};

export default useConfiguracoes;
