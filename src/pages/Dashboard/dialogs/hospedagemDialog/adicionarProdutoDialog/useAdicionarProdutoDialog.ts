import { adicionarProdutoHospedagem } from 'service/hospedagem/hospedagem';
import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import type { AdicionarProdutoDialogFormValues, AdicionarProdutoDialogProps } from './adicionarProdutoDialog.types';

const useAdicionarProdutoDialog = ({ idHospedagem, atualizarHospedagem, onClose }: AdicionarProdutoDialogProps) => {
  const _dispatch = useDispatch();

  const handleSubmit = async (values: AdicionarProdutoDialogFormValues) => {
    try {
      _dispatch(AppActions.toggleLoading(true));

      if (!idHospedagem) {
        throw new Error('Código da hospedagem não encontrado');
      }

      const response = await adicionarProdutoHospedagem({
        codigoHospedagem: idHospedagem,
        codigoProduto: values.produto.value,
        quantidade: Number(values.quantidade),
      });

      if (response.data) {
        _dispatch(
          AppActions.toggleNotificacao({
            mensagem: 'Produto adicionado com sucesso',
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

export { useAdicionarProdutoDialog };
