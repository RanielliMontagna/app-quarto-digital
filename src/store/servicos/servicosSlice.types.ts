export type Servico = {};

export interface ServicosSlice {
  servicos: Servico[];
}

export interface ServicosSliceWithCallbacks extends ServicosSlice {
  novoServico: boolean;
  setNovoServico: React.Dispatch<React.SetStateAction<boolean>>;
}
