import { useEffect } from 'react';

import { useDispatch } from 'store/hooks';
import { QuartosActions, useQuartos } from 'store/quartos';

const useDashboard = () => {
  const _dispatch = useDispatch();
  const { quartos } = useQuartos();

  useEffect(() => {
    if (quartos === null || quartos?.length === 0) {
      _dispatch(QuartosActions.buscarQuartos({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    quartos,
  };
};

export default useDashboard;

