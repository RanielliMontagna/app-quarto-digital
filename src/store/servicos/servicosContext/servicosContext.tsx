import { createContext } from 'react';
import type { ServicosSliceWithCallbacks } from '../servicosSlice.types';

const ServicosContext = createContext<ServicosSliceWithCallbacks>({} as ServicosSliceWithCallbacks);

export default ServicosContext;
