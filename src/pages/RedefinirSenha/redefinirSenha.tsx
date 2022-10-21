import { UseFormReturn } from 'react-hook-form';
import { CircularProgress } from '@mui/material';

import * as styled from './redefinirSenha.styles';
import type { RedefinirSenhaFormValues } from './redefinirSenha.types';
import useRedefinirSenha from './useRedefinirSenha';

import { useDispatch } from 'store/hooks';
import { AuthActions, useAuth } from 'store/auth';

import { EnviarEmail } from './etapas/enviarEmail/enviarEmail';
import { RedefinirSenhaProvider, useRedefinirSenhaContext } from './redefinirSenha.context';
import { EmailEnviado } from './etapas/emailEnviado/emailEnviado';
import { TrocarSenha } from './etapas/trocarSenha/trocarSenha';
import { azulQD } from 'themes';
import { Form } from '@rm-monorepo/fields/lib/fields/src';

const RedefinirSenha = () => {
  const logo = '/assets/logo/quartoDigitalBranco.svg';

  const { onSubmit } = useRedefinirSenha();
  const { step } = useRedefinirSenhaContext();

  return (
    <Form onSubmit={onSubmit}>
      {(formProps: UseFormReturn<RedefinirSenhaFormValues>) => (
        <div style={{ display: 'flex', overflow: 'hidden' }}>
          <styled.DivLayout>
            <styled.DivIlustracao>
              {/* Logo */}
              <img src={logo} alt={logo} style={{ width: '250px' }} />
            </styled.DivIlustracao>
            <h2>
              Simplifique suas tarefas e tenha mais tempo para se <br />
              dedicar ao bem estar dos seus hóspedes.
            </h2>
          </styled.DivLayout>
          <styled.DivResetPassword>
            {step === 0 && <CircularProgress style={{ color: azulQD }} size="64px" />}
            {step === 1 && <EnviarEmail errors={formProps.formState.errors} />}
            {step === 2 && <EmailEnviado />}
            {step === 3 && <TrocarSenha errors={formProps.formState.errors} watch={formProps.watch} />}
          </styled.DivResetPassword>
        </div>
      )}
    </Form>
  );
};

const RedefinirSenhaWrapper = () => {
  const _dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) _dispatch(AuthActions.clearAuth());

  return (
    <RedefinirSenhaProvider>
      <RedefinirSenha />
    </RedefinirSenhaProvider>
  );
};

export default RedefinirSenhaWrapper;
