import { useEffect, useMemo } from 'react';

import { useDispatch } from 'store/hooks';
import { HospedagensActions, useHospedagens } from 'store/hospedagens';

export const useListagemHospedagens = () => {
  const _dispatch = useDispatch();
  const { hospedagens } = useHospedagens();

  useEffect(() => {
    if (!hospedagens?.length) {
      _dispatch(HospedagensActions.buscarHospedagens({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataHospedagens = useMemo(() => {
    return hospedagens?.map((hospedagem) => ({
      ...hospedagem,
    }));
  }, [hospedagens]);

  return {
    dataHospedagens,
  };
};
