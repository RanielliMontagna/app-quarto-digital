import { useNavigate } from 'react-router-dom';
import { login } from 'service';

import { AppActions } from 'store';
import { AuthActions } from 'store/auth';
import { useDispatch } from 'store/hooks';

import { LoginFormValues } from './Login.types';

const useLogin = () => {
  const _dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async ({ email, password }: LoginFormValues) => {
    _dispatch(AppActions.toggleLoading(true));
    try {
      const { data } = await login(email, password);

      if (data.token) {
        navigate('/');
        _dispatch(AuthActions.storeToken(data.token));
      }

      _dispatch(AppActions.toggleLoading(false));
    } catch (error) {
      _dispatch(AppActions.handleErrors(error));
    }
  };

  return {
    onSubmit,
  };
};

export default useLogin;
