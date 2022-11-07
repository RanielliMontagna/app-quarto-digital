import { useMemo, useEffect } from 'react';

import { ClientesActions, useClientes } from 'store/clientes';
import { useDispatch } from 'store/hooks';
import { useQuartos } from 'store/quartos';

const useHospede = () => {
  const _dispatch = useDispatch();
  const { clientes } = useClientes();
  const { quartos } = useQuartos();

  const optionsClientes = useMemo(() => {
    return clientes
      ?.map((cliente) => ({
        value: cliente.id,
        label: cliente.nome,
      }))
      .filter((cliente) => {
        if (quartos != null) {
          for (const quarto of quartos) {
            if (quarto.hospedagem?.Cliente.id === cliente.value) {
              return false;
            }
          }
        }

        return true;
      });
  }, [clientes, quartos]);

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
