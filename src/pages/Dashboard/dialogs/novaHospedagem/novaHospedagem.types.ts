export interface NovaHospedagemProps {
  handleCloseNovaHospedagem: () => void;
}

export interface INovaHospedagemFormValues {}

export interface INovaHospedagemContext {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

