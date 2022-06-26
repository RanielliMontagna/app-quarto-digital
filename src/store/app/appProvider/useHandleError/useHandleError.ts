import { useEffect, useCallback } from 'react';
import { AxiosError } from 'axios';

import { useSnackbar, VariantType } from 'notistack';

import { useDispatch, useSelector } from 'store/hooks';
import { AppActions } from 'store';

const useHandleError = () => {
  const app = useSelector(({ App }) => App);

  const _dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const _dispararNotificacao = useCallback(
    (mensagem: string, variante?: VariantType) => {
      enqueueSnackbar(mensagem, {
        variant: variante ?? 'success',
        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
        autoHideDuration: 5000,
      });
      _dispatch(AppActions.toggleNotificacao({}));
    },
    [_dispatch, enqueueSnackbar]
  );

  useEffect(() => {
    const error = app.error as any;

    if (error) {
      if ('name' in error && error.name === 'AxiosError') {
        const errorAxios = error as AxiosError;

        setTimeout(() => {
          if (errorAxios.code === 'ERR_NETWORK') {
            _dispararNotificacao('Ocorreu um erro ao conectar, verifique sua conexão!', 'warning');
          } else {
            const mensagem = (errorAxios.response?.data as any)?.erro;
            if (mensagem) {
              _dispararNotificacao(mensagem, 'error');
            }
          }

          _dispatch(AppActions.handleErrors(null));
          _dispatch(AppActions.toggleLoading(false));
        }, 1000);
      } else {
        _dispararNotificacao('Erro não tratado', 'error');
        _dispatch(AppActions.handleErrors(null));
        _dispatch(AppActions.toggleLoading(false));
      }
    }
  }, [app.error, _dispararNotificacao, _dispatch]);
};

export default useHandleError;
