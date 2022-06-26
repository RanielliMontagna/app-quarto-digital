import React from 'react';
import { PaginaBase } from 'components';
import { IoAdd } from 'react-icons/io5';
import NovoProduto from './novoProduto/novoProduto';
import { ProdutosProvider, useProdutos } from 'store/produtos';

const Produtos = () => {
  const { setNovoProduto } = useProdutos();

  return (
    <PaginaBase
      titulo="Produtos"
      button={{
        children: 'Novo produto',
        variant: 'outlined',
        startIcon: <IoAdd />,
        onClick: () => setNovoProduto(true),
      }}
    >
      <NovoProduto />
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
