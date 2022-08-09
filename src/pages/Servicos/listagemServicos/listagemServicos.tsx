import { useMemo } from 'react';
import { DataTable } from '@rm-monorepo/data-table/lib/dataTable/src';

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
    <div style={{ display: 'flex', height: '100%', width: '100%' }}>
      {dataServicos && dataServicos?.length > 0 ? (
        <DataTable colunas={colunasServicos} data={dataServicos} />
      ) : (
        _renderEmptyState
      )}
    </div>
  );
};

export default ListagemServicos;

