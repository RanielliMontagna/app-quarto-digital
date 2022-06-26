import React from 'react';
import { PaginaBase } from 'components';
import { IoAdd } from 'react-icons/io5';
import NovoCliente from './modais/novoCliente/novoCliente';
import { ClientesProvider, useClientes } from 'store/clientes';

const Clientes = () => {
  const { setNovoCliente } = useClientes();

  return (
    <PaginaBase
      titulo="Clientes"
      button={{
        children: 'Novo cliente',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setNovoCliente(true),
      }}
    >
      <NovoCliente />
    </PaginaBase>
  );
};

const ClientesWrapper: React.FC = () => {
  return (
    <ClientesProvider>
      <Clientes />
    </ClientesProvider>
  );
};

export default ClientesWrapper;
