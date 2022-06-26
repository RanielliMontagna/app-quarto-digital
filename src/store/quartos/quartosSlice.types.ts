export type Quarto = {};

export interface QuartosSlice {
  quartos: Quarto[];
}

export interface QuartosSliceWithCallbacks extends QuartosSlice {
  novoQuarto: boolean;
  setNovoQuarto: React.Dispatch<React.SetStateAction<boolean>>;
}
