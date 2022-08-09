import { useMemo } from 'react';
import { DataTable } from '@rm-monorepo/data-table/lib/dataTable/src';

import { useClientes } from 'store/clientes';
import { EmptyStateSearch, EmptyStateSemClientes } from '../emptyStateClientes/emptyStateClientes';
import { colunasClientes } from './listagemCliente.static';
import { useListagemClientes } from './useListagemClientes';

const ListagemClientes = () => {
  const { dataClientes } = useListagemClientes();
  const { clientes } = useClientes();

  const _renderEmptyState = useMemo(() => {
    if (clientes === null) {
      return <EmptyStateSemClientes />;
    } else {
      return <EmptyStateSearch />;
    }
  }, [clientes]);

  return (
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      {dataClientes && dataClientes?.length > 0 ? (
        <DataTable colunas={colunasClientes} data={dataClientes} />
      ) : (
        _renderEmptyState
      )}
    </div>
  );
};

export default ListagemClientes;
