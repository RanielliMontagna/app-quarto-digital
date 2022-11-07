export interface AdicionarProdutoDialogProps {
  onClose: () => void;
  atualizarHospedagem: () => void;
  idHospedagem?: number;
}

export interface AdicionarProdutoDialogFormValues {
  produto: {
    label: string;
    value: number;
    preco: number;
    nome: string;
  };
  quantidade: number;
  preco: number;
}
