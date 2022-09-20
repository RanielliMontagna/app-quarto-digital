import { Control, FormState, UseFormHandleSubmit } from 'react-hook-form';

export interface NovaHospedagemProps {
  handleCloseNovaHospedagem: () => void;
}

export interface INovaHospedagemFormValues {}

export interface INovaHospedagemContext {
  handleSubmit: UseFormHandleSubmit<INovaHospedagemFormValues>;
  control: Control<INovaHospedagemFormValues>;
  formState: FormState<INovaHospedagemFormValues>;

  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

