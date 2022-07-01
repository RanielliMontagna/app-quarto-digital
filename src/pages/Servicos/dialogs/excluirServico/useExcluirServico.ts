import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import { ServicosActions, useServicos } from 'store/servicos';
import { excluirServico as excluirServicoApi } from 'service';

const useExcluirServico = () => {
  const _dispatch = useDispatch();
  const { excluirServico, setExcluirServico } = useServicos();

  const handleClose = () => {
    setExcluirServico({ open: false });
  };

  const handleSubmit = async () => {
    _dispatch(AppActions.toggleLoading(true));
    try {
      if (excluirServico.servico?.id) {
        const { status } = await excluirServicoApi(excluirServico.servico?.id);
        if (status === 200) {
          setExcluirServico({ open: false });
          const search = document.getElementById('search') as HTMLInputElement;
          _dispatch(
            ServicosActions.buscarServicos({
              search: search.value ?? undefined,
            })
          );
          _dispatch(AppActions.toggleLoading(false));
          _dispatch(AppActions.toggleNotificacao({ mensagem: 'Serviço excluído com sucesso!' }));
        }
      } else {
        throw new Error('Serviço não encontrado');
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  return {
    open: excluirServico.open,
    nome: excluirServico.servico?.nome,
    handleClose,
    handleSubmit,
  };
};

export default useExcluirServico;
