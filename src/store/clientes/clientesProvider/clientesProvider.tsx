import { useSelector } from 'hooks';
import React from 'react';
import ClientesContext from '../clientesContext/clientesContext';

const ClientesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const clientes = useSelector(({ Clientes }) => Clientes);
  const [novoCliente, setNovoCliente] = React.useState(false);

  return (
    <ClientesContext.Provider value={{ novoCliente, setNovoCliente, ...clientes }}>{children}</ClientesContext.Provider>
  );
};

export default ClientesProvider;
