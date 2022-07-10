import { useCallback, useEffect } from 'react';
import { useSnackbar, VariantType } from 'notistack';

import { useDispatch } from 'store/hooks';
import { AppActions } from 'store';
import { useSelector } from 'hooks';

export const useNotification = () => {
  const app = useSelector(({ App }) => App);

  const _dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const dispararNotificacao = useCallback(
    (mensagem: string, variante?: VariantType, autoHideDuration?: number) => {
      enqueueSnackbar(mensagem, {
        variant: variante ?? 'success',
        anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
        autoHideDuration: autoHideDuration ?? 3000,
      });
      _dispatch(AppActions.toggleNotificacao({}));
    },
    [_dispatch, enqueueSnackbar]
  );

  useEffect(() => {
    if (app.notificacao.mensagem) {
      dispararNotificacao(app.notificacao.mensagem ?? '', app.notificacao.variante, app.notificacao.autoHideDuration);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app.notificacao]);
};

export default useNotification;

