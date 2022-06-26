import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AuthSlice, IProfile, Token } from './authSlice.types';

export const initialState: AuthSlice = {
  token: localStorage.getItem('token') || null,
  isAuthenticated: Boolean(localStorage.getItem('token')),
  profile: null,
};

const clientesSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearAuth: (state) => {
      localStorage.removeItem('token');
      state.isAuthenticated = false;
      state.token = null;
      state.profile = null;
    },
    storeToken: (state, { payload }: PayloadAction<Token>) => {
      localStorage.setItem('token', payload ?? '');
      state.token = payload;
    },
    storeIsAuthenticated: (state, { payload }: PayloadAction<boolean>) => {
      state.isAuthenticated = payload;
    },
    storeProfile: (state, { payload }: PayloadAction<IProfile>) => {
      state.profile = payload;
    },
  },
});

export default clientesSlice;
