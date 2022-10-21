import { IoAdd } from 'react-icons/io5';
import throttle from 'lodash.throttle';

import { SearchField } from '@rm-monorepo/fields/lib/fields/src';

import { PaginaBase } from 'components';
import { useDispatch } from 'store/hooks';
import { ProdutosActions, ProdutosProvider, useProdutos } from 'store/produtos';

import ListagemProdutos from './listagemProdutos/listagemProdutos';
import ExcluirProduto from './dialogs/excluirProduto/excluirProduto';

const Produtos = () => {
  const { setAdicionarEditarProduto, excluirProduto, produtos } = useProdutos();
  const _dispatch = useDispatch();

  const handleSearch = throttle(
    async (term: string) => await _dispatch(ProdutosActions.buscarProdutos({ search: term })),
    500,
    { leading: false }
  );

  return (
    <PaginaBase
      titulo="Produtos"
      button={{
        children: 'Novo produto',
        variant: 'outlined',
        startIcon: <IoAdd size="18" />,
        onClick: () => setAdicionarEditarProduto({ open: true }),
        hide: produtos === null,
      }}
      right={<SearchField placeholder="Buscar produtos" handleSearch={handleSearch} />}
    >
      <div style={{ display: 'flex', height: '100%' }}>
        <ListagemProdutos />
        {excluirProduto.open && <ExcluirProduto />}
      </div>
    </PaginaBase>
  );
};

const ProdutosWrapper = () => {
  return (
    <ProdutosProvider>
      <Produtos />
    </ProdutosProvider>
  );
};

export default ProdutosWrapper;
