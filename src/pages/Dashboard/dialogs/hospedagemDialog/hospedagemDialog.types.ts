import { IQuarto } from 'store/quartos';

export interface HospedagemDialogState {
  open: boolean;
  quarto?: IQuarto;
}

export interface HospedagemDialogProps {
  handleClose: () => void;
  quarto?: IQuarto;
}
