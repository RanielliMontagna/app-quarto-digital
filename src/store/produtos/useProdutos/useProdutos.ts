import { useContext } from 'react';
import ProdutosContext from '../produtosContext/produtosContext';

const Produtos = () => {
  const context = useContext(ProdutosContext);

  if (!context) {
    throw new Error('Produtos() deve estar dentro de um <ProdutosProvider />');
  }

  return context;
};

export default Produtos;
