import { Control, FieldErrors, WatchInternal } from 'react-hook-form';

export interface IRedefinirSenhaContext {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}

export interface RedefinirSenhaFormValues {
  email?: string;

  senha?: string;
  confirmarSenha?: string;
}

export interface IEnviarEmail {
  control: Control<RedefinirSenhaFormValues>;
  errors: FieldErrors<RedefinirSenhaFormValues>;
}

export interface ITrocarSenha {
  control: Control<RedefinirSenhaFormValues>;
  errors: FieldErrors<RedefinirSenhaFormValues>;
  watch: WatchInternal<RedefinirSenhaFormValues>;
}

