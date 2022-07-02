import { createTheme, ThemeProvider } from '@mui/material';
import { memo } from 'react';
import { Field } from '../Login.styles';
import { IFieldsLogin } from './fields.types';

const Fields = ({ errors, register }: IFieldsLogin) => {
  const theme = createTheme({});

  return (
    <ThemeProvider theme={theme}>
      <Field
        label="Email *"
        error={Boolean(errors?.email)}
        helperText={errors?.email?.message}
        variant="outlined"
        {...register('email', {
          required: {
            value: true,
            message: 'O email é obrigatório',
          },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'O email é inválido',
          },
        })}
      />
      <Field
        label="Senha *"
        error={Boolean(errors?.password)}
        type="password"
        helperText={errors?.password?.message}
        variant="outlined"
        {...register('password', {
          required: { value: true, message: 'A senha é obrigatória' },
        })}
      />
    </ThemeProvider>
  );
};

export default memo(Fields);
