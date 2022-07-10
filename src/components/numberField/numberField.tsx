import { TextField } from '@mui/material';
import { memo } from 'react';
import { Controller } from 'react-hook-form';
import NumberFormat from 'react-number-format';
import { INumberField } from './numberField.types';
import { useMasks } from './useMasks';

const NumberField = ({ control, name, defaultValue, shouldUnregister, rules, mask, onInputChange, ...rest }: INumberField) => {
  const { objMask } = useMasks(mask);

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      rules={rules}
      render={({ field: { onChange, value } }) => (
        <NumberFormat
          customInput={TextField}
          onValueChange={(values) => {
            onInputChange && onInputChange(values.value);
            onChange(values.value);
          }}
          value={value}
          allowNegative={false}
          inputProps={{
            onFocus: (e: React.FocusEvent<HTMLInputElement>) => e.target.select(),
          }}
          size="small"
          variant="outlined"
          autoComplete="off"
          {...objMask(value)}
          {...rest}
        />
      )}
    />
  );
};

export default memo(NumberField);
