import { useEffect, useMemo } from 'react';

import { useDispatch } from 'store/hooks';
import { ClientesActions, useClientes } from 'store/clientes';

import dayjs from 'dayjs';
import { masks } from '@rm-monorepo/utils';

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
      cpfCnpj: cliente.cpfCnpj ? masks.cpfCnpj(cliente.cpfCnpj) : '-',
      telefone: cliente.telefone ? masks.phone(cliente.telefone) : '-',
      dataNasc: cliente.dataNasc ? dayjs().diff(cliente.dataNasc, 'year') : '-',
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

