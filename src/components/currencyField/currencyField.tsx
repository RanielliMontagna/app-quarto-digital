import { TextField } from '@mui/material';
import { memo } from 'react';
import { Controller } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import { ICurrencyField } from './currencyField.types';

const CurrencyField = ({ textFieldProps, ...rest }: ICurrencyField) => {
  return (
    <Controller
      {...rest}
      render={({ field }) => (
        <NumberFormat
          customInput={TextField}
          onValueChange={(v) => field.onChange(v.floatValue)}
          value={field.value}
          thousandsGroupStyle="thousand"
          thousandSeparator="."
          decimalSeparator=","
          prefix={'R$ '}
          inputProps={{
            maxLength: 12,
          }}
          {...textFieldProps}
        />
      )}
    />
  );
};

export default memo(CurrencyField);
