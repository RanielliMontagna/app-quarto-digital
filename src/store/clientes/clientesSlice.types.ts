import React from 'react';

export interface ICliente {
  id: number;
  nome: string;
  cpfCnpj: string | null;
  email: string | null;
  telefone: string;
  dataNasc: string | null;
}

export type NovoClienteType = Omit<ICliente, 'id'>;

export interface ClientesSlice {
  clientes: ICliente[] | null;
}

export interface AdicionarEditarClienteDialog {
  open: boolean;
  cliente?: ICliente;
}

export interface ExcluirClienteDialog {
  open: boolean;
  cliente?: ICliente;
}

export interface ClientesSliceWithCallbacks extends ClientesSlice {
  adicionarEditarCliente: AdicionarEditarClienteDialog;
  excluirCliente: ExcluirClienteDialog;

  setAdicionarEditarCliente: React.Dispatch<React.SetStateAction<AdicionarEditarClienteDialog>>;
  setExcluirCliente: React.Dispatch<React.SetStateAction<ExcluirClienteDialog>>;
}
