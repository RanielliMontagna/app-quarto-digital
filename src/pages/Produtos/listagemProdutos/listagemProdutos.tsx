import { useMemo } from 'react';
import { DataTable } from '@rm-monorepo/data-table/lib/dataTable/src';

import { PaperDataTable } from 'components';
import { useProdutos } from 'store/produtos';
import { EmptyStateSearch, EmptyStateSemProdutos } from '../emptyStateProdutos/emptyStateProdutos';
import { colunasProdutos } from './listagemProduto.static';
import { useListagemProdutos } from './useListagemProdutos';

const ListagemProdutos = () => {
  const { dataProdutos } = useListagemProdutos();
  const { produtos } = useProdutos();

  const _renderEmptyState = useMemo(() => {
    if (produtos === null) {
      return <EmptyStateSemProdutos />;
    } else {
      return <EmptyStateSearch />;
    }
  }, [produtos]);

  return (
    <PaperDataTable>
      {dataProdutos && dataProdutos?.length > 0 ? (
        <DataTable colunas={colunasProdutos} data={dataProdutos} />
      ) : (
        _renderEmptyState
      )}
    </PaperDataTable>
  );
};

export default ListagemProdutos;

