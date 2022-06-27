import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import { ProdutosActions, useProdutos } from 'store/produtos';
import { excluirProduto as excluirProdutoApi } from 'service';

const useExcluirProduto = () => {
  const _dispatch = useDispatch();
  const { excluirProduto, setExcluirProduto } = useProdutos();

  const handleClose = () => {
    setExcluirProduto({ open: false });
  };

  const handleSubmit = async () => {
    _dispatch(AppActions.toggleLoading(true));
    try {
      if (excluirProduto.produto?.id) {
        const { status } = await excluirProdutoApi(excluirProduto.produto?.id);
        if (status === 200) {
          setExcluirProduto({ open: false });
          _dispatch(ProdutosActions.buscarProdutos());
          _dispatch(AppActions.toggleLoading(false));
          _dispatch(AppActions.toggleNotificacao({ mensagem: 'Produto excluído com sucesso!' }));
        }
      } else {
        throw new Error('Produto não encontrado');
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  return {
    open: excluirProduto.open,
    nome: excluirProduto.produto?.nome,
    handleClose,
    handleSubmit,
  };
};

export default useExcluirProduto;
