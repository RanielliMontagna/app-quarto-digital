import { useSelector } from 'hooks';
import React, { useState } from 'react';
import ClientesContext from '../clientesContext/clientesContext';
import { AdicionarEditarClienteDialog, ExcluirClienteDialog } from '../clientesSlice.types';

const ClientesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const clientes = useSelector(({ Clientes }) => Clientes);
  const [adicionarEditarCliente, setAdicionarEditarCliente] = useState<AdicionarEditarClienteDialog>({ open: false });
  const [excluirCliente, setExcluirCliente] = useState<ExcluirClienteDialog>({ open: false });

  return (
    <ClientesContext.Provider
      value={{ adicionarEditarCliente, setAdicionarEditarCliente, excluirCliente, setExcluirCliente, ...clientes }}
    >
      {children}
    </ClientesContext.Provider>
  );
};

export default ClientesProvider;
