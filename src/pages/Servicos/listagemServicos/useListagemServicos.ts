import { useEffect, useMemo } from 'react';

import { useDispatch } from 'store/hooks';
import { ServicosActions, useServicos } from 'store/servicos';
import { valor } from 'utils';

export const useListagemServicos = () => {
  const _dispatch = useDispatch();
  const { servicos, setAdicionarEditarServico, setExcluirServico } = useServicos();

  useEffect(() => {
    if (!servicos?.length) {
      _dispatch(ServicosActions.buscarServicos({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataServicos = useMemo(() => {
    return servicos?.map((servico) => ({
      ...servico,
      preco: valor(servico.preco),
      acoes: [
        {
          id: 'editar',
          label: 'Editar',
          onClick: () => {
            setAdicionarEditarServico({ open: true, servico });
          },
        },
        {
          id: 'excluir',
          label: 'Excluir',
          onClick: () => {
            setExcluirServico({ open: true, servico });
          },
        },
      ],
    }));
  }, [servicos, setAdicionarEditarServico, setExcluirServico]);

  return {
    dataServicos,
  };
};
