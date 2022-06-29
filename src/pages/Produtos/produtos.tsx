import React from 'react';
import { IoAdd } from 'react-icons/io5';

import { EmptyState, PaginaBase } from 'components';
import { ProdutosProvider, useProdutos } from 'store/produtos';
import ListagemProdutos from './listagemProdutos/listagemProdutos';

import ExcluirProduto from './dialogs/excluirProduto/excluirProduto';
import AdicionarEditarProduto from './dialogs/adicionarEditarProduto/adicionarEditarProduto';

const Produtos = () => {
  const emptyState = './assets/svgs/produtos/emptyState.svg';
  const { setAdicionarEditarProduto, adicionarEditarProduto, excluirProduto, produtos } = useProdutos();

  return (
    <PaginaBase
      titulo="Produtos"
      button={{
        children: 'Novo produto',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setAdicionarEditarProduto({ open: true }),
        hide: produtos.length === 0,
      }}
    >
      <div style={{ display: 'flex', height: '100%' }}>
        {produtos.length > 0 ? (
          <ListagemProdutos />
        ) : (
          <EmptyState
            imagem={emptyState}
            titulo="Nenhum produto cadastrado"
            descricao={
              <>
                Adicione produtos para fazer o controle <br />
                dos seus gastos e acompanhar suas despesas.
              </>
            }
            botao={{
              children: 'Novo produto',
              variant: 'outlined',
              startIcon: <IoAdd />,
              onClick: () => setAdicionarEditarProduto({ open: true }),
            }}
          />
        )}
        {adicionarEditarProduto.open && <AdicionarEditarProduto />}
        {excluirProduto.open && <ExcluirProduto />}
      </div>
    </PaginaBase>
  );
};

const ProdutosWrapper: React.FC = () => {
  return (
    <ProdutosProvider>
      <Produtos />
    </ProdutosProvider>
  );
};

export default ProdutosWrapper;
