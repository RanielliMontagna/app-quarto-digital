import { useSelector } from 'hooks';
import { FC, memo, useCallback, useEffect } from 'react';
import AppContext from '../appContext/appContext';
import { VariantType, useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { AppActions } from 'store';
import { AxiosError } from 'axios';

const AppProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const _dispatch = useDispatch();
  const app = useSelector(({ App }) => App);
  const { enqueueSnackbar } = useSnackbar();

  const _dispararNotificacao = useCallback(
    (mensagem: string, variante?: VariantType) => {
      enqueueSnackbar(mensagem, {
        variant: variante ?? 'success',
        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
        autoHideDuration: 3000,
      });
      _dispatch(AppActions.toggleNotificacao({}));
    },
    [_dispatch, enqueueSnackbar]
  );

  useEffect(() => {
    if (app.notificacao.mensagem) {
      _dispararNotificacao(app.notificacao.mensagem ?? '', app.notificacao.variante);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app.notificacao]);

  useEffect(() => {
    const error = app.error as any;

    if (error) {
      if ('name' in error && error.name === 'AxiosError') {
        const errorAxios = error as AxiosError;

        setTimeout(() => {
          const mensagem = (errorAxios.response?.data as any)?.erro;
          if (mensagem) {
            _dispararNotificacao(mensagem, 'error');
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

  return <AppContext.Provider value={app}>{children}</AppContext.Provider>;
};

export default memo(AppProvider);
