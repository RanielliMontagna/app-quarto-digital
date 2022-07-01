import { TextFieldProps } from '@mui/material';
import { Control, UseControllerProps } from 'react-hook-form';

export type ITextField = Omit<UseControllerProps, 'control'> &
  Pick<TextFieldProps, 'label' | 'error' | 'helperText' | 'size' | 'fullWidth' | 'variant'> & {
    control: Control<any>;
  };
