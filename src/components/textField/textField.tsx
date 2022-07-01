import { TextField as TextFieldMui } from '@mui/material';
import { memo } from 'react';
import { Controller } from 'react-hook-form';
import { ITextField } from './textField.types';

const TextField = ({ control, rules, name, defaultValue, shouldUnregister, ...rest }: ITextField) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      shouldUnregister={shouldUnregister}
      render={({ field }) => (
        <TextFieldMui
          size="small"
          variant="outlined"
          value={field.value}
          defaultValue={field.value}
          onChange={(v) => field.onChange(v)}
          InputLabelProps={{ shrink: field.value ? true : false }}
          {...rest}
        />
      )}
    />
  );
};

export default memo(TextField);
