import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IHospedagem, HospedagensSlice } from './hospedagensSlice.types';

export const initialState: HospedagensSlice = {
  hospedagens: null,
};

const hospedagensSlice = createSlice({
  name: 'hospedagens',
  initialState,
  reducers: {
    storeHospedagens: (state, { payload }: PayloadAction<IHospedagem[] | null>) => {
      state.hospedagens = payload;
    },
  },
});

export default hospedagensSlice;
