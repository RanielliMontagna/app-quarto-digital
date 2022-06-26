import { createSlice } from '@reduxjs/toolkit';

import type { ProdutosSlice } from './produtosSlice.types';

export const initialState: ProdutosSlice = {
  produtos: [],
};

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    clearProdutos: (state) => {
      state = initialState;
    },
  },
});

export default produtosSlice;
