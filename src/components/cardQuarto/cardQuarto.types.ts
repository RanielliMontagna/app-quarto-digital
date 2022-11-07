import { IQuarto } from 'store/quartos';

export interface NovaHospedagemProps {
  open: boolean;
  quarto?: IQuarto;
}

export interface CardQuartoProps extends IQuarto {
  novaHospedagem?: NovaHospedagemProps;
  onClick?: () => void;
}
