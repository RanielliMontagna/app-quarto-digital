import { IoAdd } from 'react-icons/io5';
import throttle from 'lodash.throttle';

import { SearchField } from '@rm-monorepo/fields';

import { PaginaBase } from 'components';
import { useDispatch } from 'store/hooks';
import { ClientesActions, ClientesProvider, useClientes } from 'store/clientes';

import ListagemClientes from './listagemClientes/listagemClientes';
import ExcluirCliente from './dialogs/excluirCliente/excluirCliente';
import AdicionarEditarCliente from './dialogs/adicionarEditarCliente/adicionarEditarCliente';

const Clientes = () => {
  const { setAdicionarEditarCliente, adicionarEditarCliente, excluirCliente, clientes } = useClientes();
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
        {adicionarEditarCliente.open && <AdicionarEditarCliente />}
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

