import { useSelector } from 'hooks';
import React from 'react';
import ProdutosContext from '../produtosContext/produtosContext';

const ProdutosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const produtos = useSelector(({ Produtos }) => Produtos);
  const [novoProduto, setNovoProduto] = React.useState(false);

  return (
    <ProdutosContext.Provider value={{ novoProduto, setNovoProduto, ...produtos }}>{children}</ProdutosContext.Provider>
  );
};

export default ProdutosProvider;
