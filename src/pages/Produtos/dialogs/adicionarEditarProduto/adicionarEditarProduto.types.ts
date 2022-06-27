import { FieldErrors, UseFormRegister } from 'react-hook-form';

export interface AdicionarEditarProdutoFormValues {
  nome: string;
  preco: number;
}

export interface IFields {
  register: UseFormRegister<AdicionarEditarProdutoFormValues>;
  errors: FieldErrors<AdicionarEditarProdutoFormValues>;
}
