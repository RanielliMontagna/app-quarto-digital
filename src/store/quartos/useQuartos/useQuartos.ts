import { useContext } from 'react';
import QuartosContext from '../quartosContext/quartosContext';

const Quartos = () => {
  const context = useContext(QuartosContext);

  if (!context) {
    throw new Error('Quartos() deve estar dentro de um <QuartosProvider />');
  }

  return context;
};

export default Quartos;
