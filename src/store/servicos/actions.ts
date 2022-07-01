import servicosSlice from './servicosSlice';
import buscarServicos from './thunks/buscarServicos';

const actions = {
  buscarServicos,
  ...servicosSlice.actions,
};

export default actions;
