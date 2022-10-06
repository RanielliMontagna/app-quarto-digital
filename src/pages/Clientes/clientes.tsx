import { IoAdd } from 'react-icons/io5';
import throttle from 'lodash.throttle';

import { SearchField } from '@rm-monorepo/fields/lib/fields/src';

import { PaginaBase } from 'components';
import { useDispatch } from 'store/hooks';
import { ClientesActions, ClientesProvider, useClientes } from 'store/clientes';

import ListagemClientes from './listagemClientes/listagemClientes';
import ExcluirCliente from './dialogs/excluirCliente/excluirCliente';

const Clientes = () => {
  const { setAdicionarEditarCliente, excluirCliente, clientes } = useClientes();
  const _dispatch = useDispatch();

  const handleSearch = throttle(
    async (term: string) => {
      await _dispatch(
        ClientesActions.buscarClientes({
          search: term,
        })
      );
    },
    500,
    { leading: false }
  );

  return (
    <PaginaBase
      titulo="Clientes"
      button={{
        children: 'Novo cliente',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setAdicionarEditarCliente({ open: true }),
        hide: clientes === null,
      }}
      right={<SearchField placeholder="Buscar clientes" handleSearch={handleSearch} />}
    >
      <div style={{ display: 'flex', height: '100%' }}>
        <ListagemClientes />
        {excluirCliente.open && <ExcluirCliente />}
      </div>
    </PaginaBase>
  );
};

const ClientesWrapper = () => {
  return (
    <ClientesProvider>
      <Clientes />
    </ClientesProvider>
  );
};

export default ClientesWrapper;

