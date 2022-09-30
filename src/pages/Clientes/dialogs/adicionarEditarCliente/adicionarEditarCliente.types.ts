import { ICliente } from 'store/clientes';

export interface AdicionarEditarClienteFormValues extends Omit<ICliente, 'id'> {}
export interface AdicionarCliente extends Omit<ICliente, 'id'> {}
export interface EditarCliente extends ICliente {}

