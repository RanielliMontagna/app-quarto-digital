import React from 'react';
import { IoAdd } from 'react-icons/io5';

import { PaginaBase } from 'components';
import { ProdutosProvider, useProdutos } from 'store/produtos';
import ListagemProdutos from './listagemProdutos/listagemProdutos';

import ExcluirProduto from './dialogs/excluirProduto/excluirProduto';
import AdicionarEditarProduto from './dialogs/adicionarEditarProduto/adicionarEditarProduto';

const Produtos = () => {
  const { setAdicionarEditarProduto, adicionarEditarProduto, excluirProduto } = useProdutos();

  return (
    <PaginaBase
      titulo="Produtos"
      button={{
        children: 'Novo produto',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setAdicionarEditarProduto({ open: true }),
      }}
    >
      <>
        <ListagemProdutos />
        {adicionarEditarProduto.open && <AdicionarEditarProduto />}
        {excluirProduto.open && <ExcluirProduto />}
      </>
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
