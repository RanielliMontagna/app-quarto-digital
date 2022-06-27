import { DataTable } from 'components';
import { colunasProdutos } from './listagemProduto.static';
import { useListagemProdutos } from './useListagemProdutos';

const ListagemProdutos = () => {
  const { dataProdutos } = useListagemProdutos();

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <DataTable colunas={colunasProdutos} data={dataProdutos} />
    </div>
  );
};

export default ListagemProdutos;
