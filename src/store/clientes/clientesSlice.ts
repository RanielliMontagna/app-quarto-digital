import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { ClientesSlice, ICliente } from './clientesSlice.types';

export const initialState: ClientesSlice = {
  clientes: [],
};

const clientesSlice = createSlice({
  name: 'clientes',
  initialState,
  reducers: {
    storeClientes: (state, { payload }: PayloadAction<ICliente[] | null>) => {
      state.clientes = payload;
    },
  },
});

export default clientesSlice;
