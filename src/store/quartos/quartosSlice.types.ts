export interface IHospedagemQuarto {
  Cliente: {
    id: number;
    nome: string;
    telefone: string;
  };
  dataEntrada: string;
  dataSaida: string;
  id: number;
  status: number;
}

export interface IQuarto {
  id: number;
  identificacao: number;
  diaria: number;
  hospedagem: IHospedagemQuarto | null;
  hospedagens: IHospedagemQuarto[];
  status: number;
}

export type NovoQuartoType = {
  identificacao: number;
  diaria: number;
};
export interface QuartosSlice {
  quartos: IQuarto[] | null;
}

export interface AdicionarEditarQuartoDialog {
  open: boolean;
  quarto?: IQuarto;
}

export interface ExcluirQuartoDialog {
  open: boolean;
  quarto?: IQuarto;
}
export interface QuartosSliceWithCallbacks extends QuartosSlice {
  adicionarEditarQuarto: AdicionarEditarQuartoDialog;
  excluirQuarto: ExcluirQuartoDialog;

  setAdicionarEditarQuarto: React.Dispatch<React.SetStateAction<AdicionarEditarQuartoDialog>>;
  setExcluirQuarto: React.Dispatch<React.SetStateAction<ExcluirQuartoDialog>>;
}
