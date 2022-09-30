export interface AdicionarEditarProdutoFormValues {
  nome: string;
  preco: number;
}

export interface AdicionarProduto extends AdicionarEditarProdutoFormValues {}
export interface EditarProduto extends AdicionarEditarProdutoFormValues {
  id: number;
}

