export interface NovaHospedagemProps {
  handleCloseNovaHospedagem: () => void;
}

export interface INovaHospedagemFormValues {
  hospede?: {
    label: string;
    value: string | number;
  };
  observacao?: string;

  dataEntrada?: Date;
  dataSaida?: Date;
}

export interface INovaHospedagemContext {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

