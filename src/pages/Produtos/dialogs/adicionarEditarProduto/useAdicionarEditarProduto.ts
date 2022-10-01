import { useCallback, useEffect, useMemo, useState } from 'react';
import { adicionarProduto, buscarProduto, editarProduto } from 'service';
import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import { IProduto, ProdutosActions, useProdutos } from 'store/produtos';
import { AdicionarEditarProdutoFormValues, AdicionarProduto, EditarProduto } from './adicionarEditarProduto.types';

const useAdicionarEditarProduto = () => {
  const _dispatch = useDispatch();
  const { adicionarEditarProduto, setAdicionarEditarProduto } = useProdutos();
  const [produto, setProduto] = useState<IProduto>();

  const handleClose = () => {
    setAdicionarEditarProduto({ open: false });
  };

  const _adicionarProduto = async (values: AdicionarProduto) => {
    try {
      const { data } = await adicionarProduto({
        nome: values.nome,
        preco: Number(values.preco),
      });
      if (data) {
        _dispatch(AppActions.toggleNotificacao({ mensagem: 'Novo produto adicionado com sucesso!' }));
        const search = document.getElementById('search') as HTMLInputElement;
        _dispatch(
          ProdutosActions.buscarProdutos({
            search: search.value ?? undefined,
          })
        );
        handleClose();
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  const _editarProduto = async (values: EditarProduto) => {
    try {
      const { status } = await editarProduto({
        id: values.id,
        nome: values.nome,
        preco: Number(values.preco),
      });
      if (status === 200) {
        _dispatch(AppActions.toggleNotificacao({ mensagem: 'Produto editado com sucesso!' }));
        const search = document.getElementById('search') as HTMLInputElement;
        _dispatch(
          ProdutosActions.buscarProdutos({
            search: search.value ?? undefined,
          })
        );
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

  const _buscarProduto = useCallback(
    async (id: number) => {
      _dispatch(AppActions.toggleLoading(true));
      try {
        const { data } = await buscarProduto(id);
        if (data) {
          _dispatch(AppActions.toggleLoading(false));
          setProduto(data);
        }
      } catch (err) {
        _dispatch(AppActions.handleErrors(err));
      }
    },
    [_dispatch]
  );

  const initialValues = useMemo(() => {
    if (produto?.id) {
      return {
        nome: produto.nome,
        preco: produto.preco,
      };
    }

    return {};
  }, [produto]);

  useEffect(() => {
    if (adicionarEditarProduto.produto) {
      _buscarProduto(adicionarEditarProduto.produto.id);
    }
  }, [_buscarProduto, adicionarEditarProduto.produto]);

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
