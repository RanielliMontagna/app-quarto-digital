import { createTheme, ThemeProvider } from '@mui/material';
import { memo } from 'react';
import { Field } from '../Login.styles';
import { IFieldsLogin } from './fields.types';

import { composeRules, email, required } from 'utils/rules';

const Fields = ({ errors, register }: IFieldsLogin) => {
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
