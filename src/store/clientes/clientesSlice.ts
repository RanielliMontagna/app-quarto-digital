import { createSlice } from '@reduxjs/toolkit';

import type { ClientesSlice } from './clientesSlice.types';

export const initialState: ClientesSlice = {
  clientes: [],
};

const clientesSlice = createSlice({
  name: 'clientes',
  initialState,
  reducers: {
    clearClientes: (state) => {
      state = initialState;
    },
  },
});

export default clientesSlice;
