import quartosSlice from './quartosSlice';
import buscarQuartos from './thunks/buscarQuartos';

const actions = {
  ...quartosSlice.actions,
  buscarQuartos,
};

export default actions;

