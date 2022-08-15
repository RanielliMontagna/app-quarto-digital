import { AppActions } from 'store';
import { useDispatch } from 'store/hooks';
import { QuartosActions, useQuartos } from 'store/quartos';
import { excluirQuarto as excluirQuartoApi } from 'service';

const useExcluirQuarto = () => {
  const _dispatch = useDispatch();
  const { excluirQuarto, setExcluirQuarto } = useQuartos();

  const handleClose = () => {
    setExcluirQuarto({ open: false });
  };

  const handleSubmit = async () => {
    _dispatch(AppActions.toggleLoading(true));
    try {
      if (excluirQuarto.quarto?.id) {
        const { status } = await excluirQuartoApi(excluirQuarto.quarto?.id);
        if (status === 200) {
          setExcluirQuarto({ open: false });
          const search = document?.getElementById('search') as HTMLInputElement;
          _dispatch(
            QuartosActions.buscarQuartos({
              search: search?.value ?? undefined,
            })
          );
          _dispatch(AppActions.toggleLoading(false));
          _dispatch(AppActions.toggleNotificacao({ mensagem: 'Quarto excluído com sucesso!' }));
        }
      } else {
        throw new Error('Quarto não encontrado');
      }
    } catch (err) {
      _dispatch(AppActions.handleErrors(err));
    }
  };

  return {
    open: excluirQuarto.open,
    identificacao: excluirQuarto.quarto?.identificacao,
    handleClose,
    handleSubmit,
  };
};

export default useExcluirQuarto;

