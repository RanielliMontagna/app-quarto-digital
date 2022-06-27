import { useMemo } from 'react';
import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import { useProdutos } from 'store/produtos';

const useAdicionarEditarProduto = () => {
  const _dispatch = useDispatch();
  const { adicionarEditarProduto, setAdicionarEditarProduto } = useProdutos();

  const handleClose = () => {
    setAdicionarEditarProduto({ open: false });
  };

  const onSubmit = (values: any) => {
    try {
      console.log('entrou', values);
      // _dispatch(AppActions.toggleNotificacao({ mensagem: 'Novo produto adicionado com sucesso!' }));
      // handleClose();
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
