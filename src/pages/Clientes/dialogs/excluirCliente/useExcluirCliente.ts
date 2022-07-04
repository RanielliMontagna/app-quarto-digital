import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import { ClientesActions, useClientes } from 'store/clientes';
import { excluirCliente as excluirClienteApi } from 'service';

const useExcluirCliente = () => {
  const _dispatch = useDispatch();
  const { excluirCliente, setExcluirCliente } = useClientes();

  const handleClose = () => {
    setExcluirCliente({ open: false });
  };

  const handleSubmit = async () => {
    _dispatch(AppActions.toggleLoading(true));
    try {
      if (excluirCliente.cliente?.id) {
        const { status } = await excluirClienteApi(excluirCliente.cliente?.id);
        if (status === 200) {
          setExcluirCliente({ open: false });
          const search = document.getElementById('search') as HTMLInputElement;
          _dispatch(
            ClientesActions.buscarClientes({
              search: search.value ?? undefined,
            })
          );
          _dispatch(AppActions.toggleLoading(false));
          _dispatch(AppActions.toggleNotificacao({ mensagem: 'Cliente excluído com sucesso!' }));
        }
      } else {
        throw new Error('Cliente não encontrado');
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  return {
    open: excluirCliente.open,
    nome: excluirCliente.cliente?.nome,
    handleClose,
    handleSubmit,
  };
};

export default useExcluirCliente;
