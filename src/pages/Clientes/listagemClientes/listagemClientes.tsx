import { useMemo } from 'react';
import { DataTable } from '@rm-monorepo/data-table/lib/dataTable/src';

import { PaperDataTable } from 'components';
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
    <PaperDataTable>
      {dataClientes && dataClientes?.length > 0 ? (
        <DataTable colunas={colunasClientes} data={dataClientes} />
      ) : (
        _renderEmptyState
      )}
    </PaperDataTable>
  );
};

export default ListagemClientes;

