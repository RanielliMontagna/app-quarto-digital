import React from 'react';

export interface IServico {
  id: number;
  nome: string;
  preco: number;
}

export type NovoServicoType = Omit<IServico, 'id'>;

export interface ServicosSlice {
  servicos: IServico[] | null;
}

export interface AdicionarEditarServicoDialog {
  open: boolean;
  servico?: IServico;
}

export interface ExcluirServicoDialog {
  open: boolean;
  servico?: IServico;
}

export interface ServicosSliceWithCallbacks extends ServicosSlice {
  adicionarEditarServico: AdicionarEditarServicoDialog;
  excluirServico: ExcluirServicoDialog;

  setAdicionarEditarServico: React.Dispatch<React.SetStateAction<AdicionarEditarServicoDialog>>;
  setExcluirServico: React.Dispatch<React.SetStateAction<ExcluirServicoDialog>>;
}
