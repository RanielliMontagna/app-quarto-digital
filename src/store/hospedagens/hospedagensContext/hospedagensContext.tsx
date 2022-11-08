import { createContext } from 'react';
import type { HospedagensSliceWithCallbacks } from '../hospedagensSlice.types';

const HospedagemContext = createContext({} as HospedagensSliceWithCallbacks);

export default HospedagemContext;
