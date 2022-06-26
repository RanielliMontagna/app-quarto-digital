import { createContext } from 'react';
import type { ClientesSliceWithCallbacks } from '../clientesSlice.types';

const ClientesContext = createContext<ClientesSliceWithCallbacks>({} as ClientesSliceWithCallbacks);

export default ClientesContext;
