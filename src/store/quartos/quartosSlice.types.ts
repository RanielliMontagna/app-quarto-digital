export interface IQuarto {
  id: number;
  identificacao: string;
  diaria: number;
  status: string;
}

export type NovoQuartoType = Omit<IQuarto, 'id' | 'status'>;
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

