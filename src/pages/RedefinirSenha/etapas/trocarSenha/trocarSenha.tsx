import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { BiCheckCircle, BiXCircle } from 'react-icons/bi';

import { useNavigate } from 'react-router-dom';
import type { ITrocarSenha } from '../../redefinirSenha.types';

import { Button } from '@rm-monorepo/button/lib/button/src';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import { TextField } from '@rm-monorepo/fields/lib/fields/src';
import { composeRules, required } from '@rm-monorepo/utils/lib/rules/rules';

import { danger, success } from 'themes';

const TrocarSenha = ({ errors, watch }: ITrocarSenha) => {
  const _navigate = useNavigate();

  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmacaoSenha, setMostrarConfirmacaoSenha] = useState(false);

  const _handleMostrarSenha = () => setMostrarSenha((prev) => !prev);
  const _handleMostrarConfirmacaoSenha = () => setMostrarConfirmacaoSenha((prev) => !prev);

  const senhasIguais = watch()?.senha === watch()?.confirmarSenha;
  const minimoCaracteres = watch()?.senha?.length >= 6;
  const contemLetra = watch()?.senha && /[a-zA-Z]/.test(watch()?.senha);
  const contemNumero = watch()?.senha && /[0-9]/.test(watch()?.senha);

  const _senhaValida = minimoCaracteres && contemLetra && contemNumero && senhasIguais;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '32px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '4px' }}>
        <Typography size="lg" weight="bold">
          Informe sua nova senha
        </Typography>

        <Typography size="md">Lembre-se de escolher uma senha segura</Typography>
      </div>
      <div>
        <Typography size="md" weight="bold">
          Informe sua nova senha abaixo e clique em "Redefinir senha"
        </Typography>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <TextField
            name="senha"
            InputProps={{
              type: !mostrarSenha ? 'password' : 'text',
              endAdornment: (
                <div style={{ cursor: 'pointer' }} onClick={_handleMostrarSenha}>
                  {!mostrarSenha ? <FiEye /> : <FiEyeOff />}
                </div>
              ),
            }}
            label="Nova senha *"
            error={Boolean(errors?.senha)}
            helperText={errors?.senha?.message}
            variant="outlined"
            rules={composeRules([required])}
            fullWidth
          />
          <TextField
            name="confirmarSenha"
            InputProps={{
              type: !mostrarConfirmacaoSenha ? 'password' : 'text',
              endAdornment: (
                <div style={{ cursor: 'pointer' }} onClick={_handleMostrarConfirmacaoSenha}>
                  {!mostrarConfirmacaoSenha ? <FiEye /> : <FiEyeOff />}
                </div>
              ),
            }}
            label="Confirmar senha *"
            error={Boolean(errors?.confirmarSenha)}
            helperText={errors?.confirmarSenha?.message}
            variant="outlined"
            rules={composeRules([required])}
            fullWidth
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {minimoCaracteres ? (
              <BiCheckCircle style={{ color: success }} size={24} />
            ) : (
              <BiXCircle size={24} style={{ color: danger }} />
            )}
            <Typography size="sm" weight="bold">
              Mínimo de 6 caracteres
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {contemLetra && contemNumero ? (
              <BiCheckCircle style={{ color: success }} size={24} />
            ) : (
              <BiXCircle size={24} style={{ color: danger }} />
            )}
            <Typography size="sm" weight="bold">
              Conter letras e números
            </Typography>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            {senhasIguais ? (
              <BiCheckCircle style={{ color: success }} size={24} />
            ) : (
              <BiXCircle size={24} style={{ color: danger }} />
            )}
            <Typography size="sm" weight="bold">
              Senhas iguais
            </Typography>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <Button fullWidth color="primary" size="lg" type={_senhaValida ? 'submit' : 'button'}>
            <Typography weight="bold">Redefinir senha</Typography>
          </Button>
          <Button fullWidth color="neutral" size="lg" onClick={() => _navigate('/login')}>
            <Typography weight="normal">Voltar para o login</Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};

export { TrocarSenha };

