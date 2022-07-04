import { Control, FieldErrors } from 'react-hook-form';

export interface AdicionarEditarProdutoFormValues {
  nome: string;
  preco: number;
}

export interface AdicionarProduto extends AdicionarEditarProdutoFormValues {}
export interface EditarProduto extends AdicionarEditarProdutoFormValues {
  id: number;
}

export interface IFields {
  errors: FieldErrors<AdicionarEditarProdutoFormValues>;
  control: Control<AdicionarEditarProdutoFormValues>;
}
