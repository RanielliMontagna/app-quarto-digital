import { Control, FieldErrors, UseFormSetValue } from 'react-hook-form';
import { ICliente } from 'store/clientes';

export interface AdicionarEditarClienteFormValues extends Omit<ICliente, 'id'> {}
export interface AdicionarCliente extends Omit<ICliente, 'id'> {}
export interface EditarCliente extends ICliente {}

export interface IFields {
  errors: FieldErrors<AdicionarEditarClienteFormValues>;
  control: Control<AdicionarEditarClienteFormValues>;
  setValue: UseFormSetValue<AdicionarEditarClienteFormValues>;
}

