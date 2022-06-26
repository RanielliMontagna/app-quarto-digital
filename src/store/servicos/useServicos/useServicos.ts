import { useContext } from 'react';
import ServicosContext from '../servicosContext/servicosContext';

const Servicos = () => {
  const context = useContext(ServicosContext);

  if (!context) {
    throw new Error('Servicos() deve estar dentro de um <ServicosProvider />');
  }

  return context;
};

export default Servicos;
