import { useMemo } from 'react';
import { adicionarProduto, editarProduto } from 'service';
import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import { ProdutosActions, useProdutos } from 'store/produtos';
import { AdicionarEditarProdutoFormValues, AdicionarProduto, EditarProduto } from './adicionarEditarProduto.types';

const useAdicionarEditarProduto = () => {
  const _dispatch = useDispatch();
  const { adicionarEditarProduto, setAdicionarEditarProduto } = useProdutos();

  const handleClose = () => {
    setAdicionarEditarProduto({ open: false });
  };

  const _adicionarProduto = async (values: AdicionarProduto) => {
    try {
      const { data } = await adicionarProduto(values);
      if (data) {
        _dispatch(AppActions.toggleNotificacao({ mensagem: 'Novo produto adicionado com sucesso!' }));
        _dispatch(ProdutosActions.buscarProdutos());
        handleClose();
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  const _editarProduto = async (values: EditarProduto) => {
    try {
      const { status } = await editarProduto(values);
      if (status === 200) {
        _dispatch(AppActions.toggleNotificacao({ mensagem: 'Produto editado com sucesso!' }));
        _dispatch(ProdutosActions.buscarProdutos());
        handleClose();
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  const onSubmit = (values: AdicionarEditarProdutoFormValues) => {
    _dispatch(AppActions.toggleLoading(true));
    try {
      if (adicionarEditarProduto.produto) {
        _editarProduto({ ...values, id: adicionarEditarProduto.produto.id });
      } else {
        _adicionarProduto(values);
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  const initialValues = useMemo(() => {
    const produto = adicionarEditarProduto?.produto;

    if (produto) {
      return {
        nome: produto.nome,
        preco: produto.preco,
      };
    }

    return {};
  }, [adicionarEditarProduto.produto]);

  return {
    open: adicionarEditarProduto.open,
    titulo: adicionarEditarProduto.produto ? 'Editar produto' : 'Adicionar produto',
    labelBotao: adicionarEditarProduto.produto ? 'Salvar' : 'Adicionar',
    initialValues,
    handleClose,
    onSubmit,
  };
};

export default useAdicionarEditarProduto;
