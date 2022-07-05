import { useEffect, useMemo } from 'react';

import { useDispatch } from 'store/hooks';
import { ClientesActions, useClientes } from 'store/clientes';

import dayjs from 'dayjs';
import { cpfCnpj, phone } from 'utils/masks';

export const useListagemClientes = () => {
  const _dispatch = useDispatch();
  const { clientes, setAdicionarEditarCliente, setExcluirCliente } = useClientes();

  useEffect(() => {
    if (!clientes?.length) {
      _dispatch(ClientesActions.buscarClientes({}));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataClientes = useMemo(() => {
    return clientes?.map((cliente) => ({
      ...cliente,
      email: cliente.email ?? '-',
      cpfCnpj: cliente.cpfCnpj ? cpfCnpj(cliente.cpfCnpj) : '-',
      telefone: cliente.telefone ? phone(cliente.telefone) : '-',
      dataNasc: cliente.dataNasc ? dayjs(cliente.dataNasc).format('DD/MM/YYYY') : '-',
      acoes: [
        {
          id: 'editar',
          label: 'Editar',
          onClick: () => {
            setAdicionarEditarCliente({ open: true, cliente });
          },
        },
        {
          id: 'excluir',
          label: 'Excluir',
          onClick: () => {
            setExcluirCliente({ open: true, cliente });
          },
        },
      ],
    }));
  }, [clientes, setAdicionarEditarCliente, setExcluirCliente]);

  return {
    dataClientes,
  };
};
