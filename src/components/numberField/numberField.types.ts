import { TextFieldProps } from '@mui/material';
import { Control, UseControllerProps } from 'react-hook-form';

export type MasksType = 'cpf' | 'cnpj' | 'cpfCnpj' | 'phone';

export type INumberField = Omit<UseControllerProps, 'control'> & {
  control: Control<any>;

  /**
   * @default undefined
   * @description Define o tipo de máscara que será aplicada ao campo.
   * @example cpf
   */
  mask?: MasksType;

  /**
   * @default false
   * @description Se true, o campo permitirá números negativos.
   */
  allowNegative?: boolean;

  /**
   * @description é chamado sempre que o valor do campo é alterado.
   */
  onInputChange?: (value: string) => void;
} & Pick<
    TextFieldProps,
    | 'label'
    | 'error'
    | 'helperText'
    | 'size'
    | 'fullWidth'
    | 'variant'
    | 'autoFocus'
    | 'placeholder'
    | 'autoComplete'
    | 'InputProps'
    | 'disabled'
  >;

