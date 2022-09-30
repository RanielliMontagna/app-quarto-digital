import { useNavigate } from 'react-router-dom';
import type { IEnviarEmail } from '../../redefinirSenha.types';

import { Button } from '@rm-monorepo/button/lib/button/src';
import { TextField } from '@rm-monorepo/fields/lib/fields/src';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import { rules } from '@rm-monorepo/utils';

const EnviarEmail = ({ errors }: IEnviarEmail) => {
  const { required, email, composeRules } = rules;

  const _navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '32px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '4px' }}>
        <Typography size="lg" weight="bold">
          Esqueceu sua senha?
        </Typography>
        <Typography size="md">Não se preocupe, vamos te ajudar a recuperar sua senha.</Typography>
      </div>
      <div>
        <Typography size="md" weight="bold">
          Informe seu email abaixo e enviaremos um link para redefinição de senha.
        </Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <TextField
          name="email"
          label="Email *"
          error={Boolean(errors?.email)}
          helperText={errors?.email?.message}
          variant="outlined"
          rules={composeRules([required, email])}
          fullWidth
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Button fullWidth color="primary" size="lg" type="submit">
            <Typography weight="bold"> Enviar email</Typography>
          </Button>
          <Button fullWidth color="neutral" size="lg" onClick={() => _navigate('/login')}>
            <Typography weight="normal">Voltar para o login</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export { EnviarEmail };

