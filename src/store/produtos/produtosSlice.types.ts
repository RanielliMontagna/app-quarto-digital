export type Produto = {};

export interface ProdutosSlice {
  produtos: Produto[];
}

export interface ProdutosSliceWithCallbacks extends ProdutosSlice {
  novoProduto: boolean;
  setNovoProduto: React.Dispatch<React.SetStateAction<boolean>>;
}
