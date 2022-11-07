export interface AdicionarServicoDialogProps {
  onClose: () => void;
  atualizarHospedagem: () => void;
  idHospedagem?: number;
}

export interface AdicionarServicoDialogFormValues {
  servico: {
    label: string;
    value: number;
    preco: number;
    nome: string;
  };
  quantidade: number;
  preco: number;
}
