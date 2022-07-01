import { Control, FieldErrors, UseFormRegister } from 'react-hook-form';

export interface AdicionarEditarServicoFormValues {
  nome: string;
  preco: number;
}

export interface AdicionarServico extends AdicionarEditarServicoFormValues {}
export interface EditarServico extends AdicionarEditarServicoFormValues {
  id: number;
}

export interface IFields {
  register: UseFormRegister<AdicionarEditarServicoFormValues>;
  errors: FieldErrors<AdicionarEditarServicoFormValues>;
  control: Control<AdicionarEditarServicoFormValues>;
}
