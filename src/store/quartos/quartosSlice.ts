import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IQuarto, QuartosSlice } from './quartosSlice.types';

export const initialState: QuartosSlice = {
  quartos: null,
};

const quartosSlice = createSlice({
  name: 'quartos',
  initialState,
  reducers: {
    storeQuartos: (state, { payload }: PayloadAction<IQuarto[] | null>) => {
      state.quartos = payload;
    },
  },
});

export default quartosSlice;

