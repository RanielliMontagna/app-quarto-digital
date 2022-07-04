import { useCallback, useEffect, useMemo, useState } from 'react';
import { adicionarCliente, buscarCliente, editarCliente } from 'service';
import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import { ICliente, ClientesActions, useClientes } from 'store/clientes';
import { AdicionarEditarClienteFormValues, AdicionarCliente, EditarCliente } from './adicionarEditarCliente.types';

const useAdicionarEditarCliente = () => {
  const _dispatch = useDispatch();
  const { adicionarEditarCliente, setAdicionarEditarCliente } = useClientes();
  const [cliente, setCliente] = useState<ICliente>();

  const handleClose = () => {
    setAdicionarEditarCliente({ open: false });
  };

  const _adicionarCliente = async (values: AdicionarCliente) => {
    try {
      const { data } = await adicionarCliente(values);
      if (data) {
        _dispatch(AppActions.toggleNotificacao({ mensagem: 'Novo cliente adicionado com sucesso!' }));
        const search = document.getElementById('search') as HTMLInputElement;
        _dispatch(
          ClientesActions.buscarClientes({
            search: search.value ?? undefined,
          })
        );
        handleClose();
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  const _editarCliente = async (values: EditarCliente) => {
    try {
      const { status } = await editarCliente(values);
      if (status === 200) {
        _dispatch(AppActions.toggleNotificacao({ mensagem: 'Cliente editado com sucesso!' }));
        const search = document.getElementById('search') as HTMLInputElement;
        _dispatch(
          ClientesActions.buscarClientes({
            search: search.value ?? undefined,
          })
        );
        handleClose();
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  const onSubmit = (values: AdicionarEditarClienteFormValues) => {
    _dispatch(AppActions.toggleLoading(true));
    try {
      if (adicionarEditarCliente.cliente) {
        _editarCliente({ ...values, id: adicionarEditarCliente.cliente.id });
      } else {
        _adicionarCliente(values);
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  const _buscarCliente = useCallback(
    async (id: number) => {
      _dispatch(AppActions.toggleLoading(true));
      try {
        const { data } = await buscarCliente(id);
        if (data) {
          _dispatch(AppActions.toggleLoading(false));
          setCliente(data);
        }
      } catch (err) {
        _dispatch(AppActions.handleErrors(err));
      }
    },
    [_dispatch]
  );

  const initialValues = useMemo(() => {
    if (cliente?.id) {
      return {
        nome: cliente.nome,
        cpfCnpj: cliente.cpfCnpj,
        email: cliente.email,
        telefone: cliente.telefone,
        dataNasc: cliente.dataNasc,
      };
    }

    return {};
  }, [cliente]);

  useEffect(() => {
    if (adicionarEditarCliente.cliente) {
      _buscarCliente(adicionarEditarCliente.cliente.id);
    }
  }, [_buscarCliente, adicionarEditarCliente.cliente]);

  return {
    open: adicionarEditarCliente.open,
    titulo: adicionarEditarCliente.cliente ? 'Editar cliente' : 'Adicionar cliente',
    labelBotao: adicionarEditarCliente.cliente ? 'Salvar' : 'Adicionar',
    initialValues,
    handleClose,
    onSubmit,
  };
};

export default useAdicionarEditarCliente;
