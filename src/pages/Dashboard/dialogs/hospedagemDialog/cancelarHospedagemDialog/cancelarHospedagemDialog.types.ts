import type { DadosHospedagem } from 'service/hospedagem/hospedagem.types';

export interface CancelarHospedagemDialogProps {
  onClose: () => void;
  onCloseHospedagem: () => void;
  hospedagem?: DadosHospedagem;
}

export interface CancelarHospedagemDialogState {
  open: boolean;
  hospedagem?: DadosHospedagem;
}
