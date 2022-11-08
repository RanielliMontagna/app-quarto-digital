import { useContext } from 'react';
import HospedagensContext from '../hospedagensContext/hospedagensContext';

const Hospedagens = () => {
  const context = useContext(HospedagensContext);

  if (!context) {
    throw new Error('useHospedagens() deve estar dentro de um <HospedagensProvider />');
  }

  return context;
};

export default Hospedagens;
