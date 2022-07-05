import { TextFieldProps } from '@mui/material';
import { Control, UseControllerProps } from 'react-hook-form';

export type IDatePicker = Omit<UseControllerProps, 'control'> &
  Pick<TextFieldProps, 'label' | 'error' | 'helperText' | 'size' | 'fullWidth' | 'variant'> & {
    control: Control<any>;

    /**
     * @default true
     * @description quando false, a data futura não será permitida.
     */
    disableFuture?: boolean;

    /**
     * @default null
     * @description quando definido, adiciona uma data máxima para o datepicker.
     */
    maxDate?: string;

    /**
     * @default null
     * @description quando definido, adiciona uma data mínima para o datepicker.
     */
    minDate?: string;
  };
