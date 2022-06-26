import { logout } from 'service';

import { AuthActions } from 'store/auth';
import { AppActions, useApp } from 'store';
import { useDispatch } from 'store/hooks';
import { useNavigate } from 'react-router-dom';

export const useAppBar = () => {
  const { tema } = useApp();
  const _dispatch = useDispatch();
  const _navigate = useNavigate();

  const handleMudarTema = () => {
    if (tema === 'escuro') {
      _dispatch(AppActions.storeTema('claro'));
    } else {
      _dispatch(AppActions.storeTema('escuro'));
    }
  };

  const handleSair = async () => {
    _dispatch(AppActions.toggleLoading(true));
    try {
      const res = await logout();
      if (res) {
        _navigate('/login');
        _dispatch(AuthActions.storeToken(''));
        _dispatch(AuthActions.storeIsAuthenticated(false));
        _dispatch(
          AppActions.toggleNotificacao({
            mensagem: 'Deslogado com sucesso!',
          })
        );
        _dispatch(AppActions.toggleLoading(false));
      }
    } catch (err) {
      _navigate('/login');
      _dispatch(AppActions.handleErrors(err));
    }
  };

  return { handleSair, handleMudarTema };
};
