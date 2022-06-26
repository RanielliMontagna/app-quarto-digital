import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { AppSlice, LoadingType, Notificacao, Error } from './appSlice.types';

export const initialState: AppSlice = {
  loading: false,
  tema: localStorage.getItem('tema'),
  notificacao: {},
  error: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    clearApp: (state) => {
      state.loading = initialState.loading;
    },
    storeTema: (state, { payload }) => {
      localStorage.setItem('tema', payload);
      state.tema = payload;
    },
    toggleLoading: (state, { payload }: PayloadAction<LoadingType>) => {
      state.loading = payload;
    },
    toggleNotificacao: (state, { payload }: PayloadAction<Notificacao>) => {
      state.notificacao = payload;
    },
    handleErrors: (state, { payload }: PayloadAction<Error>) => {
      state.error = payload;
    },
  },
});

export default appSlice;
