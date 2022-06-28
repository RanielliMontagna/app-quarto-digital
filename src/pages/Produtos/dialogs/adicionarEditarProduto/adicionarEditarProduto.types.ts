import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';

export interface AdicionarEditarProdutoFormValues {
  nome: string;
  preco: number;
}

export interface AdicionarProduto extends AdicionarEditarProdutoFormValues {}
export interface EditarProduto extends AdicionarEditarProdutoFormValues {
  id: number;
}

export interface IFields {
  register: UseFormRegister<AdicionarEditarProdutoFormValues>;
  errors: FieldErrors<AdicionarEditarProdutoFormValues>;
  control: Control<AdicionarEditarProdutoFormValues>;
}
