import React from 'react';

export interface IProduto {
  id: number;
  nome: string;
  preco: number;
}

export type NovoProdutoType = Omit<IProduto, 'id'>;

export interface ProdutosSlice {
  produtos: IProduto[];
}

export interface AdicionarEditarProdutoDialog {
  open: boolean;
  produto?: IProduto;
}

export interface ExcluirProdutoDialog {
  open: boolean;
  produto?: IProduto;
}

export interface ProdutosSliceWithCallbacks extends ProdutosSlice {
  adicionarEditarProduto: AdicionarEditarProdutoDialog;
  excluirProduto: ExcluirProdutoDialog;

  setAdicionarEditarProduto: React.Dispatch<React.SetStateAction<AdicionarEditarProdutoDialog>>;
  setExcluirProduto: React.Dispatch<React.SetStateAction<ExcluirProdutoDialog>>;
}
