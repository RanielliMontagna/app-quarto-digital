import { alterarSenha, resetarSenha } from 'service';

import { useRedefinirSenhaContext } from './redefinirSenha.context';
import type { RedefinirSenhaFormValues } from './redefinirSenha.types';

import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRedefinirSenha = () => {
  const { step, setStep, setEmail } = useRedefinirSenhaContext();
  const _dispatch = useDispatch();
  const _navigate = useNavigate();

  const handleEnviarEmail = async (email: string) => {
    _dispatch(AppActions.toggleLoading(true));
    try {
      const { data } = await resetarSenha(email);

      if (data) {
        if (step === 2) {
          _dispatch(
            AppActions.toggleNotificacao({
              mensagem: 'Email enviado com sucesso!',
            })
          );
        } else {
          setEmail(email);
          setStep(2);
        }
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
    _dispatch(AppActions.toggleLoading(false));
  };

  const _handleRedefinirSenha = async (senha: string) => {
    _dispatch(AppActions.toggleLoading(true));
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token') as string;

      const { data } = await alterarSenha({
        token,
        senha,
      });

      if (data) {
        _dispatch(
          AppActions.toggleNotificacao({
            mensagem: 'Senha redefinida com sucesso!',
          })
        );
        _navigate('/login');
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
    _dispatch(AppActions.toggleLoading(false));
  };

  const onSubmit = async (values: RedefinirSenhaFormValues) => {
    if (step === 1 && values.email) {
      handleEnviarEmail(values.email);
    }
    if (step === 3 && values.senha && values.confirmarSenha) {
      _handleRedefinirSenha(values.senha);
    }
  };

  //recupera token do link
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');

  useEffect(() => {
    if (token) {
      setStep(3);
    } else {
      if (step === 0) {
        setStep(1);
      }
    }
  }, [setStep, token, step]);

  return {
    onSubmit,
    handleEnviarEmail,
  };
};

export default useRedefinirSenha;

