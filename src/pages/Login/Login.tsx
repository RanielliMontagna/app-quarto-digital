import { useForm } from 'react-hook-form';

import * as styled from './Login.styles';
import { Divider } from 'components';

import useLogin from './useLogin';
import { LoginFormValues } from './Login.types';

const Login = () => {
  const logo = '/assets/logo/quartoDigitalPrimaria.svg';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const { onSubmit } = useLogin();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'flex', overflow: 'hidden' }}>
        <styled.DivLogin>
          {/* Logo */}
          <img src={logo} alt={logo} style={{ width: '250px' }} />

          <styled.Field
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
          <styled.Field
            label="Senha *"
            error={Boolean(errors?.password)}
            type="password"
            helperText={errors?.password?.message}
            variant="outlined"
            {...register('password', {
              required: { value: true, message: 'A senha é obrigatória' },
            })}
          />

          {/* Manter conectado e esqueci minha senha */}
          {/* <styled.DivCheckbox>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Manter conectado" />
            <styled.ForgotPassword>Esqueci minha senha</styled.ForgotPassword>
          </styled.DivCheckbox> */}

          {/* Botao Login */}
          <styled.ButtonEnter type="submit">Entrar</styled.ButtonEnter>
        </styled.DivLogin>

        <styled.DivLayout>
          <styled.DivIlustracao>
            {/* Logo */}
            <img src="./assets/svgs/login/ilustracao.svg" alt="loginIllustration"></img>
          </styled.DivIlustracao>
          <h1>Seja bem vindo!</h1>
          <Divider styles={{ width: '100px', margin: '0px 0px 16px 0px' }}></Divider>
          <h2>
            Simplifique suas tarefas e tenha mais tempo para se <br />
            dedicar ao bem estar dos seus hóspedes.
          </h2>
        </styled.DivLayout>
      </div>
    </form>
  );
};

export default Login;
