import { store } from 'store';
import { AuthActions } from 'store/auth';

export const apiUrls = {
  login: '/login',
  logout: '/logout',
};

export const makeHeaders = () => {
  const token = store.getState().Auth.token;
  const pathname = window.location.pathname.replace('/', '');

  if (token) {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      Link: pathname,
    };
  } else {
    store.dispatch(AuthActions.clearAuth());
  }
};