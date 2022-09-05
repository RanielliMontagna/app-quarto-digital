import { useNavigate } from 'react-router-dom';

import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import { Button } from '@rm-monorepo/button/lib/button/src';

import { MdMail } from 'react-icons/md';
import { azulQD, cinzaEscuro } from 'themes';

import { useRedefinirSenhaContext } from '../../redefinirSenha.context';
import useRedefinirSenha from '../../useRedefinirSenha';

const EmailEnviado = () => {
  const { email } = useRedefinirSenhaContext();
  const { handleEnviarEmail } = useRedefinirSenha();

  const _navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '32px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '4px' }}>
        <div>
          <MdMail size="48" style={{ color: azulQD }} />
        </div>
        <Typography size="lg" weight="bold">
          E-mail enviado
        </Typography>
        <Typography size="md">
          Enviamos um e-mail para <b>{email}</b>
        </Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '4px' }}>
        <Typography size="xs" weight="slim" style={{ color: cinzaEscuro }}>
          Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
        </Typography>
        <Typography size="xs" weight="slim" style={{ color: cinzaEscuro }}>
          Caso não encontre o e-mail, verifique sua caixa de spam.
        </Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Button
          fullWidth
          color="primary"
          size="lg"
          variant="outlined"
          type="submit"
          onClick={() => handleEnviarEmail(email)}
        >
          <Typography weight="bold">Reenviar e-mail</Typography>
        </Button>
        <Button fullWidth color="neutral" size="lg" onClick={() => _navigate('/login')}>
          <Typography weight="normal">Voltar para o login</Typography>
        </Button>
      </div>
    </div>
  );
};

export { EmailEnviado };

