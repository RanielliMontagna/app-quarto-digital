import { useCallback, useEffect, useMemo, useState } from 'react';
import { adicionarQuarto, buscarQuarto, editarQuarto } from 'service';
import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import { IQuarto, QuartosActions, useQuartos } from 'store/quartos';
import { AdicionarEditarQuartoFormValues, AdicionarQuarto, EditarQuarto } from './adicionarEditarQuarto.types';

const useAdicionarEditarQuarto = () => {
  const _dispatch = useDispatch();
  const { adicionarEditarQuarto, setAdicionarEditarQuarto } = useQuartos();
  const [quarto, setQuarto] = useState<IQuarto>();

  const handleClose = () => {
    setAdicionarEditarQuarto({ open: false });
  };

  const _adicionarQuarto = async (values: AdicionarQuarto) => {
    try {
      const { data } = await adicionarQuarto(values);
      if (data) {
        _dispatch(AppActions.toggleNotificacao({ mensagem: 'Novo quarto adicionado com sucesso!' }));
        const search = document.getElementById('search') as HTMLInputElement;
        _dispatch(
          QuartosActions.buscarQuartos({
            search: search?.value ?? undefined,
          })
        );
        handleClose();
      }
    } catch (err) {
      console.log(err);
      _dispatch(AppActions.handleErrors(err));
    }
  };

  const _editarQuarto = async (values: EditarQuarto) => {
    try {
      const { status } = await editarQuarto(values);
      if (status === 200) {
        _dispatch(AppActions.toggleNotificacao({ mensagem: 'Quarto editado com sucesso!' }));
        const search = document.getElementById('search') as HTMLInputElement;
        _dispatch(
          QuartosActions.buscarQuartos({
            search: search.value ?? undefined,
          })
        );
        handleClose();
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  const onSubmit = (values: AdicionarEditarQuartoFormValues) => {
    _dispatch(AppActions.toggleLoading(true));
    try {
      if (adicionarEditarQuarto.quarto) {
        _editarQuarto({ ...values, id: adicionarEditarQuarto.quarto.id });
      } else {
        _adicionarQuarto(values);
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  const _buscarQuarto = useCallback(
    async (id: number) => {
      _dispatch(AppActions.toggleLoading(true));
      try {
        const { data } = await buscarQuarto(id);
        if (data) {
          _dispatch(AppActions.toggleLoading(false));
          setQuarto(data);
        }
      } catch (err) {
        _dispatch(AppActions.handleErrors(err));
      }
    },
    [_dispatch]
  );

  const initialValues = useMemo(() => {
    if (quarto?.id) {
      return {
        identificacao: quarto?.identificacao,
        diaria: quarto?.diaria,
      };
    }

    return {};
  }, [quarto]);

  useEffect(() => {
    if (adicionarEditarQuarto.quarto) {
      _buscarQuarto(adicionarEditarQuarto.quarto.id);
    }
  }, [_buscarQuarto, adicionarEditarQuarto.quarto]);

  return {
    open: adicionarEditarQuarto.open,
    titulo: adicionarEditarQuarto.quarto ? 'Editar quarto' : 'Adicionar quarto',
    labelBotao: adicionarEditarQuarto.quarto ? 'Salvar' : 'Adicionar',
    initialValues,
    handleClose,
    onSubmit,
  };
};

export default useAdicionarEditarQuarto;

