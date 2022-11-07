import { adicionarServicoHospedagem } from 'service/hospedagem/hospedagem';
import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import type { AdicionarServicoDialogFormValues, AdicionarServicoDialogProps } from './adicionarServicoDialog.types';

const useAdicionarServicoDialog = ({ idHospedagem, atualizarHospedagem, onClose }: AdicionarServicoDialogProps) => {
  const _dispatch = useDispatch();

  const handleSubmit = async (values: AdicionarServicoDialogFormValues) => {
    try {
      _dispatch(AppActions.toggleLoading(true));

      if (!idHospedagem) {
        throw new Error('Código da hospedagem não encontrado');
      }

      const response = await adicionarServicoHospedagem({
        codigoHospedagem: idHospedagem,
        codigoServico: values.servico.value,
        quantidade: Number(values.quantidade),
      });

      if (response.data) {
        _dispatch(
          AppActions.toggleNotificacao({
            mensagem: 'Servico adicionado com sucesso',
          })
        );
        atualizarHospedagem();
        onClose();
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    } finally {
      _dispatch(AppActions.toggleLoading(false));
    }
  };

  return { handleSubmit };
};

export { useAdicionarServicoDialog };
