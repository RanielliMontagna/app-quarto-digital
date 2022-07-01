import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IServico, ServicosSlice } from './servicosSlice.types';

export const initialState: ServicosSlice = {
  servicos: [],
};

const servicosSlice = createSlice({
  name: 'servicos',
  initialState,
  reducers: {
    clearServicos: (state) => {
      state = initialState;
    },
    storeServicos: (state, { payload }: PayloadAction<IServico[] | null>) => {
      state.servicos = payload;
    },
  },
});

export default servicosSlice;
