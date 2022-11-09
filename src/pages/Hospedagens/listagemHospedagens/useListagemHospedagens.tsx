import { useEffect, useMemo } from 'react';

import { useDispatch } from 'store/hooks';
import { HospedagensActions, useHospedagens } from 'store/hospedagens';

export const useListagemHospedagens = () => {
  const _dispatch = useDispatch();
  const { hospedagens } = useHospedagens();

  useEffect(() => {
    _dispatch(HospedagensActions.buscarHospedagens({}));
  }, [_dispatch]);

  const dataHospedagens = useMemo(() => {
    return hospedagens?.map((hospedagem) => ({
      ...hospedagem,
    }));
  }, [hospedagens]);

  return {
    dataHospedagens,
  };
};
