import { TextFieldProps } from '@mui/material';
import { Control, UseControllerProps } from 'react-hook-form';

export type ICurrencyField = Omit<UseControllerProps, 'control'> & {
  control: Control<any>;
  textFieldProps?: Pick<
    TextFieldProps,
    | 'label'
    | 'error'
    | 'helperText'
    | 'size'
    | 'fullWidth'
    | 'variant'
    | 'placeholder'
    | 'autoComplete'
    | 'autoFocus'
    | 'InputProps'
    | 'disabled'
  >;
};

