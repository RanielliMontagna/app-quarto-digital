import { useMemo, useEffect } from 'react';

import { ClientesActions, useClientes } from 'store/clientes';
import { useDispatch } from 'store/hooks';

const useHospede = () => {
  const _dispatch = useDispatch();
  const { clientes } = useClientes();

  const optionsClientes = useMemo(() => {
    return clientes?.map((cliente) => ({
      value: cliente.id,
      label: cliente.nome,
    }));
  }, [clientes]);

  useEffect(() => {
    if (!clientes?.length) {
      _dispatch(ClientesActions.buscarClientes({}));
    }
  }, [_dispatch, clientes?.length]);

  return {
    optionsClientes,
  };
};

export { useHospede };

