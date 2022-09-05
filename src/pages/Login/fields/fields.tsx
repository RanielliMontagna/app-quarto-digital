import { memo } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import { rules } from '@rm-monorepo/utils';

import { Field, ForgotPassword } from '../Login.styles';
import type { IFieldsLogin } from './fields.types';
import { useNavigate } from 'react-router-dom';

const Fields = ({ errors, register }: IFieldsLogin) => {
  const { required, email, composeRules } = rules;

  const theme = createTheme({});
  const _navigate = useNavigate();

  return (
    <ThemeProvider theme={theme}>
      <Field
        label="Email *"
        error={Boolean(errors?.email)}
        helperText={errors?.email?.message}
        variant="outlined"
        {...register('email', composeRules([required, email]))}
      />
      <Field
        label="Senha *"
        error={Boolean(errors?.password)}
        type="password"
        helperText={errors?.password?.message}
        variant="outlined"
        {...register('password', required)}
      />
      <ForgotPassword onClick={() => _navigate('/redefinir-senha')}>Esqueceu sua senha?</ForgotPassword>
    </ThemeProvider>
  );
};

export default memo(Fields);

