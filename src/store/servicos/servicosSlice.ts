import { createSlice } from '@reduxjs/toolkit';

import type { ServicosSlice } from './servicosSlice.types';

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
  },
});

export default servicosSlice;
