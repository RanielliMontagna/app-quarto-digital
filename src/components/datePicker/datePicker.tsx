import { memo } from 'react';
import { Controller } from 'react-hook-form';

import { IDatePicker } from './dataPicker.types';

import { TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker as DatePickerMui } from '@mui/x-date-pickers/DatePicker';

const DatePicker = ({
  control,
  rules,
  name,
  defaultValue,
  shouldUnregister,
  disableFuture,
  maxDate,
  minDate,
  ...rest
}: IDatePicker) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        shouldUnregister={shouldUnregister}
        render={({ field: { value, onChange } }) => (
          <DatePickerMui
            disableFuture={disableFuture ?? true}
            value={value ?? null}
            maxDate={maxDate ?? undefined}
            minDate={minDate ?? undefined}
            inputFormat="DD/MM/YYYY"
            onChange={onChange}
            renderInput={(params) => <TextField size="small" variant="outlined" {...params} {...rest} />}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default memo(DatePicker);
