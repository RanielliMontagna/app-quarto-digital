import { useCallback } from 'react';
import { alterarStatusHospedagem } from 'service/hospedagem/hospedagem';
import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import { QuartosActions } from 'store/quartos';
import { CancelarHospedagemDialogProps } from './cancelarHospedagemDialog.types';

const useCancelarHospadagemDialog = ({ onClose, onCloseHospedagem, hospedagem }: CancelarHospedagemDialogProps) => {
  const _dispatch = useDispatch();

  const handleCancelarHospedagem = useCallback(async () => {
    try {
      _dispatch(AppActions.toggleLoading(true));

      if (!hospedagem) {
        throw new Error('Não foi possível cancelar a hospedagem');
      }

      const response = await alterarStatusHospedagem({
        codigoHospedagem: hospedagem.id,
        status: 2,
      });

      if (response.data) {
        _dispatch(
          AppActions.toggleNotificacao({
            mensagem: 'Hospedagem cancelada com sucesso!',
          })
        );
        _dispatch(QuartosActions.buscarQuartos({}));
        onClose();
        onCloseHospedagem();
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    } finally {
      _dispatch(AppActions.toggleLoading(false));
    }
  }, [_dispatch, hospedagem, onClose, onCloseHospedagem]);

  return {
    handleCancelarHospedagem,
  };
};

export { useCancelarHospadagemDialog };
