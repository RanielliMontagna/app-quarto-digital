import { useEffect, useMemo } from 'react';

import { useDispatch } from 'store/hooks';
import { ProdutosActions, useProdutos } from 'store/produtos';

export const useListagemProdutos = () => {
  const _dispatch = useDispatch();
  const { produtos } = useProdutos();

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
            console.log('Editar');
          },
        },
        {
          id: 'excluir',
          label: 'Excluir',
          onClick: () => {
            console.log('Excluir');
          },
        },
      ],
    }));
  }, [produtos]);

  return {
    dataProdutos,
  };
};
