import { createContext } from 'react';
import type { ConfiguracoesSlice } from '../configuracoesSlice.types';

const ConfiguracoesContext = createContext<ConfiguracoesSlice>({} as ConfiguracoesSlice);

export default ConfiguracoesContext;
