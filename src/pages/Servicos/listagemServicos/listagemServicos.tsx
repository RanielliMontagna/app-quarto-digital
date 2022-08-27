import { useMemo } from 'react';
import { DataTable } from '@rm-monorepo/data-table/lib/dataTable/src';

import { PaperDataTable } from 'components';
import { useServicos } from 'store/servicos';
import { EmptyStateSearch, EmptyStateSemServicos } from '../emptyStateServicos/emptyStateServicos';
import { colunasServicos } from './listagemServico.static';
import { useListagemServicos } from './useListagemServicos';

const ListagemServicos = () => {
  const { dataServicos } = useListagemServicos();
  const { servicos } = useServicos();

  const _renderEmptyState = useMemo(() => {
    if (servicos === null) {
      return <EmptyStateSemServicos />;
    } else {
      return <EmptyStateSearch />;
    }
  }, [servicos]);

  return (
    <PaperDataTable>
      {dataServicos && dataServicos?.length > 0 ? (
        <DataTable colunas={colunasServicos} data={dataServicos} />
      ) : (
        _renderEmptyState
      )}
    </PaperDataTable>
  );
};

export default ListagemServicos;

