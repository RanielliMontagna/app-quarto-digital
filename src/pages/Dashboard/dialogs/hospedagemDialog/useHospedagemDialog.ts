import { useEffect, useCallback, useState, useMemo } from 'react';
import dayjs from 'dayjs';

import type { DadosHospedagem } from 'service/hospedagem/hospedagem.types';
import type { HospedagemDialogProps } from './hospedagemDialog.types';
import type { CancelarHospedagemDialogState } from './cancelarHospedagemDialog/cancelarHospedagemDialog.types';

import { buscarHospedagem, checkoutHospedagem } from 'service/hospedagem/hospedagem';
import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import { QuartosActions } from 'store/quartos';

const useHospedagemDialog = ({ quarto, handleClose }: HospedagemDialogProps) => {
  const _dispatch = useDispatch();
  const [hospedagem, _setHospedagem] = useState<DadosHospedagem>();

  const [adicionarProdutoDialog, setAdicionarProdutoDialog] = useState(false);
  const [adicionarServicoDialog, setAdicionarServicoDialog] = useState(false);
  const [cancelarHospedagemDialog, setCancelarHospedagemDialog] = useState<CancelarHospedagemDialogState>({
    open: false,
  });

  const valoresHospedagem = useMemo(() => {
    const diaria = hospedagem?.Quarto?.diaria || 0;
    const qtdDiarias = dayjs(hospedagem?.dataSaida).diff(hospedagem?.dataEntrada, 'day');
    const produtos =
      hospedagem?.ProdutosHospedagem?.reduce((acc, produto) => acc + produto.produtoPreco * produto.quantidade, 0) || 0;
    const servicos =
      hospedagem?.ServicosHospedagem?.reduce((acc, servico) => acc + servico.servicoPreco * servico.quantidade, 0) || 0;

    return {
      diaria,
      qtdDiarias,
      produtos,
      servicos,
      total: diaria * qtdDiarias + produtos + servicos,
    };
  }, [hospedagem]);

  const handleCancelarHospedagem = useCallback(async () => {
    setCancelarHospedagemDialog({
      open: true,
      hospedagem,
    });
  }, [hospedagem]);

  const handleBuscarHospedagem = useCallback(async () => {
    _dispatch(AppActions.toggleLoading(true));

    if (!quarto?.hospedagem?.id) {
      throw new Error('Não foi possível buscar a hospedagem');
    }

    const response = await buscarHospedagem(quarto?.hospedagem?.id);

    if (response.data) {
      _setHospedagem(response.data);
    }

    try {
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    } finally {
      _dispatch(AppActions.toggleLoading(false));
    }
  }, [_dispatch, quarto?.hospedagem?.id]);

  const handleCheckout = useCallback(async () => {
    _dispatch(AppActions.toggleLoading(true));

    try {
      const response = await checkoutHospedagem({
        codigoHospedagem: Number(hospedagem?.id),
        valor: valoresHospedagem.total,
      });

      if (response.data) {
        _dispatch(
          AppActions.toggleNotificacao({
            mensagem: 'Checkout realizado com sucesso',
          })
        );

        _dispatch(QuartosActions.buscarQuartos({}));
        handleClose();
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    } finally {
      _dispatch(AppActions.toggleLoading(false));
    }
  }, [_dispatch, handleClose, hospedagem?.id, valoresHospedagem.total]);

  useEffect(() => {
    if (quarto) {
      handleBuscarHospedagem();
    }
  }, [handleBuscarHospedagem, quarto]);

  return {
    hospedagem,
    valoresHospedagem,
    adicionarProdutoDialog,
    adicionarServicoDialog,
    cancelarHospedagemDialog,
    setAdicionarProdutoDialog,
    setAdicionarServicoDialog,
    setCancelarHospedagemDialog,
    atualizarHospedagem: handleBuscarHospedagem,
    handleCheckout,
    handleCancelarHospedagem,
  };
};

export default useHospedagemDialog;
