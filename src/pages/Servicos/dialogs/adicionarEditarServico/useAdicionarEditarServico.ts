import { useCallback, useEffect, useMemo, useState } from 'react';
import { adicionarServico, buscarServico, editarServico } from 'service';
import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import { IServico, ServicosActions, useServicos } from 'store/servicos';
import { AdicionarEditarServicoFormValues, AdicionarServico, EditarServico } from './adicionarEditarServico.types';

const useAdicionarEditarServico = () => {
  const _dispatch = useDispatch();
  const { adicionarEditarServico, setAdicionarEditarServico } = useServicos();
  const [servico, setServico] = useState<IServico>();

  const handleClose = () => {
    setAdicionarEditarServico({ open: false });
  };

  const _adicionarServico = async (values: AdicionarServico) => {
    try {
      const { data } = await adicionarServico(values);
      if (data) {
        _dispatch(AppActions.toggleNotificacao({ mensagem: 'Novo servico adicionado com sucesso!' }));
        const search = document.getElementById('search') as HTMLInputElement;
        _dispatch(
          ServicosActions.buscarServicos({
            search: search.value ?? undefined,
          })
        );
        handleClose();
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  const _editarServico = async (values: EditarServico) => {
    try {
      const { status } = await editarServico(values);
      if (status === 200) {
        _dispatch(AppActions.toggleNotificacao({ mensagem: 'Servico editado com sucesso!' }));
        const search = document.getElementById('search') as HTMLInputElement;
        _dispatch(
          ServicosActions.buscarServicos({
            search: search.value ?? undefined,
          })
        );
        handleClose();
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  const onSubmit = (values: AdicionarEditarServicoFormValues) => {
    _dispatch(AppActions.toggleLoading(true));
    try {
      if (adicionarEditarServico.servico) {
        _editarServico({ ...values, id: adicionarEditarServico.servico.id });
      } else {
        _adicionarServico(values);
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  const _buscarServico = useCallback(
    async (id: number) => {
      _dispatch(AppActions.toggleLoading(true));
      try {
        const { data } = await buscarServico(id);
        if (data) {
          _dispatch(AppActions.toggleLoading(false));
          setServico(data);
        }
      } catch (err) {
        _dispatch(AppActions.handleErrors(err));
      }
    },
    [_dispatch]
  );

  const initialValues = useMemo(() => {
    if (servico?.id) {
      return {
        nome: servico.nome,
        preco: servico.preco,
      };
    }

    return {};
  }, [servico]);

  useEffect(() => {
    if (adicionarEditarServico.servico) {
      _buscarServico(adicionarEditarServico.servico.id);
    }
  }, [_buscarServico, adicionarEditarServico.servico]);

  return {
    open: adicionarEditarServico.open,
    titulo: adicionarEditarServico.servico ? 'Editar serviço' : 'Adicionar serviço',
    labelBotao: adicionarEditarServico.servico ? 'Salvar' : 'Adicionar',
    initialValues,
    handleClose,
    onSubmit,
  };
};

export default useAdicionarEditarServico;
