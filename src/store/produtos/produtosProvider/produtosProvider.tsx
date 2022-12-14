import React, { useState } from 'react';
import { useSelector } from 'hooks';
import ProdutosContext from '../produtosContext/produtosContext';

import { AdicionarEditarProdutoDialog, ExcluirProdutoDialog } from '../produtosSlice.types';
import AdicionarEditarProduto from 'pages/Produtos/dialogs/adicionarEditarProduto/adicionarEditarProduto';

const ProdutosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const produtos = useSelector(({ Produtos }) => Produtos);
  const [adicionarEditarProduto, setAdicionarEditarProduto] = useState<AdicionarEditarProdutoDialog>({ open: false });
  const [excluirProduto, setExcluirProduto] = useState<ExcluirProdutoDialog>({ open: false });

  return (
    <ProdutosContext.Provider
      value={{ adicionarEditarProduto, setAdicionarEditarProduto, excluirProduto, setExcluirProduto, ...produtos }}
    >
      {children}
      {adicionarEditarProduto.open && <AdicionarEditarProduto />}
    </ProdutosContext.Provider>
  );
};

export default ProdutosProvider;
