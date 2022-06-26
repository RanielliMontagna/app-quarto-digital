import { createSlice } from '@reduxjs/toolkit';

import type { ConfiguracoesSlice } from './configuracoesSlice.types';

export const initialState: ConfiguracoesSlice = {
  configuracoes: null,
};

const configuracoesSlice = createSlice({
  name: 'configuracoes',
  initialState,
  reducers: {
    clearConfiguracoes: (state) => {
      state = initialState;
    },
  },
});

export default configuracoesSlice;
