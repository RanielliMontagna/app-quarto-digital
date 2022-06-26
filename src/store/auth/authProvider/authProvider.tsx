import React, { useEffect } from 'react';
import { IProfile } from '../authSlice.types';

import jwtDecode from 'jwt-decode';

import AuthContext from '../authContext/authContext';
import actions from '../actions';

import { useSelector } from 'hooks';
import { useDispatch } from 'store/hooks';

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const _dispatch = useDispatch();
  const auth = useSelector(({ Auth }) => Auth);

  useEffect(() => {
    if (auth.token) {
      _dispatch(actions.storeIsAuthenticated(true));

      const decoded = jwtDecode(auth.token);
      if (decoded) {
        _dispatch(actions.storeProfile(decoded as IProfile));
      }
    } else {
      _dispatch(actions.storeIsAuthenticated(false));
    }
  }, [auth.token, _dispatch]);

  return <AuthContext.Provider value={{ ...auth }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
