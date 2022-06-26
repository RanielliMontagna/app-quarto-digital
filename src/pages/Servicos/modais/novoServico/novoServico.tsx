import { AppActions } from 'store';
import { useDispatch } from 'react-redux';
import { Modal } from 'components';
import { MdAdd } from 'react-icons/md';
import { useServicos } from 'store/servicos';

const NovoServico = () => {
  const _dispatch = useDispatch();
  const { novoServico, setNovoServico } = useServicos();

  if (!novoServico) return null;

  const _onClose = () => {
    setNovoServico(false);
  };

  const _handleSubmit = () => {
    _dispatch(AppActions.toggleNotificacao({ mensagem: 'Novo serviço adicionado com sucesso!' }));
    _onClose();
  };

  return (
    <Modal
      open={novoServico}
      onClose={_onClose}
      titulo="Novo serviço"
      footer={{
        botaoPrimario: {
          children: 'Adicionar',
          variant: 'outlined',
          startIcon: <MdAdd />,
          onClick: _handleSubmit,
        },
      }}
    >
      <>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
        <p>teste</p>
      </>
    </Modal>
  );
};

export default NovoServico;
