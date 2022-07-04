import { TextFieldProps } from '@mui/material';
import { Control, UseControllerProps } from 'react-hook-form';

export type MasksType = 'cpf' | 'cnpj' | 'cpfCnpj';

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
} & Pick<TextFieldProps, 'label' | 'error' | 'helperText' | 'size' | 'fullWidth' | 'variant'>;
