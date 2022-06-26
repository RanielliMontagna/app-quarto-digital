import { createContext } from 'react';
import type { ProdutosSliceWithCallbacks } from '../produtosSlice.types';

const ProdutosContext = createContext<ProdutosSliceWithCallbacks>({} as ProdutosSliceWithCallbacks);

export default ProdutosContext;
