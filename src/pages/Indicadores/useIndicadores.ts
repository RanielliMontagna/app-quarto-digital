import { useCallback, useState, useEffect, useMemo } from 'react';

import type { IIndicadores } from 'service/geral/geral.types';

import { buscarIndicadores } from 'service';
import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';

const useIndicadores = () => {
  const _dispatch = useDispatch();

  const [indicadores, _setIndicadores] = useState<IIndicadores>();

  const valorAnuais = useMemo(() => {
    const array12Months = Array.from({ length: 12 }, () => 0);

    if (indicadores?.receitasAnuais) {
      indicadores.receitasAnuais.forEach((item) => {
        array12Months[item.mes] = item.valor;
      });
    }

    return array12Months;
  }, [indicadores]);

  const _handleBuscarIndicadores = useCallback(async () => {
    _dispatch(AppActions.toggleLoading(true));

    try {
      const response = await buscarIndicadores();

      if (response.data) {
        _setIndicadores(response.data);
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    } finally {
      _dispatch(AppActions.toggleLoading(false));
    }
  }, [_dispatch]);

  useEffect(() => {
    _handleBuscarIndicadores();
  }, [_handleBuscarIndicadores]);

  return {
    indicadores,
    valorAnuais,
  };
};

export { useIndicadores };
