import clientesSlice from './clientesSlice';
import buscarClientes from './thunks/buscarClientes';

const actions = {
  buscarClientes,
  ...clientesSlice.actions,
};

export default actions;
