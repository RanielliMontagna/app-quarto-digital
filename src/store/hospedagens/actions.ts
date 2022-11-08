import hospedagensSlice from './hospedagensSlice';
import buscarHospedagens from './thunks/buscarHospedagens';

const actions = {
  ...hospedagensSlice.actions,
  buscarHospedagens,
};

export default actions;
