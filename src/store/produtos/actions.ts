import produtosSlice from './produtosSlice';
import buscarProdutos from './thunks/buscarProdutos';

const actions = {
  buscarProdutos,
  ...produtosSlice.actions,
};

export default actions;
