export interface IProduto {
  id: number;
  nome: string;
  preco: number;
}

export interface ProdutosSlice {
  produtos: IProduto[];
}

export interface ProdutosSliceWithCallbacks extends ProdutosSlice {
  novoProduto: boolean;
  setNovoProduto: React.Dispatch<React.SetStateAction<boolean>>;
}
