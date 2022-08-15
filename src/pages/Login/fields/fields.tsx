import { memo } from 'react';

import { createTheme, ThemeProvider } from '@mui/material';
import { rules } from '@rm-monorepo/utils';

import { Field } from '../Login.styles';
import type { IFieldsLogin } from './fields.types';

const Fields = ({ errors, register }: IFieldsLogin) => {
  const { required, email, composeRules } = rules;
  const theme = createTheme({});

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
    </ThemeProvider>
  );
};

export default memo(Fields);

