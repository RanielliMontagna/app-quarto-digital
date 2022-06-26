import { useContext } from 'react';
import ClientesContext from '../clientesContext/clientesContext';

const useClientes = () => {
  const context = useContext(ClientesContext);

  if (!context) {
    throw new Error('useClientes() deve estar dentro de um <ClientesProvider />');
  }

  return context;
};

export default useClientes;
