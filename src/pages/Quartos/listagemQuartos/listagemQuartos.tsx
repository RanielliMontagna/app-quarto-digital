import { useMemo } from 'react';
import { DataTable } from '@rm-monorepo/data-table/lib/dataTable/src';

import { PaperDataTable } from 'components';
import { useQuartos } from 'store/quartos';
import { EmptyStateSearch, EmptyStateSemQuartos } from '../emptyStateQuartos/emptyStateQuartos';
import { colunasQuartos } from './listagemQuartos.static';
import { useListagemQuartos } from './useListagemQuartos';

const ListagemQuartos = () => {
  const { dataQuartos } = useListagemQuartos();
  const { quartos } = useQuartos();

  const _renderEmptyState = useMemo(() => {
    if (quartos === null) {
      return <EmptyStateSemQuartos />;
    } else {
      return <EmptyStateSearch />;
    }
  }, [quartos]);

  return (
    <PaperDataTable>
      {dataQuartos && dataQuartos?.length > 0 ? (
        <DataTable colunas={colunasQuartos} data={dataQuartos} />
      ) : (
        _renderEmptyState
      )}
    </PaperDataTable>
  );
};

export default ListagemQuartos;

