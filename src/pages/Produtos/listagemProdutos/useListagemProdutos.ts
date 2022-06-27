import { useEffect, useMemo } from 'react';

import { useDispatch } from 'store/hooks';
import { ProdutosActions, useProdutos } from 'store/produtos';

export const useListagemProdutos = () => {
  const _dispatch = useDispatch();
  const { produtos, setAdicionarEditarProduto, setExcluirProduto } = useProdutos();

  useEffect(() => {
    if (!produtos.length) {
      _dispatch(ProdutosActions.buscarProdutos());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataProdutos = useMemo(() => {
    return produtos.map((produto) => ({
      ...produto,
      acoes: [
        {
          id: 'editar',
          label: 'Editar',
          onClick: () => {
            setAdicionarEditarProduto({ open: true, produto });
          },
        },
        {
          id: 'excluir',
          label: 'Excluir',
          onClick: () => {
            setExcluirProduto({ open: true, produto });
          },
        },
      ],
    }));
  }, [produtos, setAdicionarEditarProduto, setExcluirProduto]);

  return {
    dataProdutos,
  };
};
