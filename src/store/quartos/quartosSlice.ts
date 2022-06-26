import { createSlice } from '@reduxjs/toolkit';

import type { QuartosSlice } from './quartosSlice.types';

export const initialState: QuartosSlice = {
  quartos: [],
};

const quartosSlice = createSlice({
  name: 'quartos',
  initialState,
  reducers: {
    clearQuartos: (state) => {
      state = initialState;
    },
  },
});

export default quartosSlice;
