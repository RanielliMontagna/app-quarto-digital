import { Control, FieldErrors } from 'react-hook-form';

export interface AdicionarEditarQuartoFormValues {
  identificacao: string;
  diaria: number;
}

export interface AdicionarQuarto extends AdicionarEditarQuartoFormValues {}
export interface EditarQuarto extends AdicionarEditarQuartoFormValues {
  id: number;
}

export interface IFields {
  errors: FieldErrors<AdicionarEditarQuartoFormValues>;
  control: Control<AdicionarEditarQuartoFormValues>;
}

