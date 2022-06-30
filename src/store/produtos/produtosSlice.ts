import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { IProduto, ProdutosSlice } from './produtosSlice.types';

export const initialState: ProdutosSlice = {
  produtos: null,
};

const produtosSlice = createSlice({
  name: 'produtos',
  initialState,
  reducers: {
    clearProdutos: (state) => {
      state = initialState;
    },
    storeProdutos: (state, { payload }: PayloadAction<IProduto[] | null>) => {
      state.produtos = payload;
    },
  },
});

export default produtosSlice;
