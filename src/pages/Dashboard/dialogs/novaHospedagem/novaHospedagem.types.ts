import { IQuarto } from 'store/quartos';

export interface NovaHospedagemProps {
  handleCloseNovaHospedagem: () => void;
}

export interface INovaHospedagemFormValues {
  //Etapa 1
  hospede?: {
    label: string;
    value: string | number;
  };
  observacao?: string;

  //Etapa 2
  dataEntrada?: Date;
  dataSaida?: Date;

  //Etapa 3
  quarto?: IQuarto;
}

export interface INovaHospedagemContext {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}
