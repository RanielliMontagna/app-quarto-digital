import { useEffect, useMemo } from 'react';
import { masks } from '@rm-monorepo/utils';
import { Chip } from '@mui/material';

import { useDispatch } from 'store/hooks';
import { QuartosActions, useQuartos } from 'store/quartos';
import { danger, success } from 'themes';

export const useListagemQuartos = () => {
  const _dispatch = useDispatch();
  const { quartos, setAdicionarEditarQuarto, setExcluirQuarto } = useQuartos();

  useEffect(() => {
    if (!quartos?.length) {
      _dispatch(QuartosActions.buscarQuartos({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataQuartos = useMemo(() => {
    return quartos?.map((quarto) => ({
      ...quarto,
      diaria: masks.valor(quarto.diaria),
      status: (
        <Chip
          label={quarto.status === 0 ? 'Disponível' : 'Ocupado'}
          style={{
            backgroundColor: quarto.status === 0 ? success : danger,
            color: 'white',
          }}
        />
      ),
      acoes: [
        {
          id: 'editar',
          label: 'Editar',
          onClick: () => {
            setAdicionarEditarQuarto({ open: true, quarto });
          },
        },
        {
          id: 'excluir',
          label: 'Excluir',
          onClick: () => {
            setExcluirQuarto({ open: true, quarto });
          },
        },
      ],
    }));
  }, [quartos, setAdicionarEditarQuarto, setExcluirQuarto]);

  return {
    dataQuartos,
  };
};
