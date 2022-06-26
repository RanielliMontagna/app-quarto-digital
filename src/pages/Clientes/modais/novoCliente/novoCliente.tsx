import { AppActions } from 'store';
import { useDispatch } from 'react-redux';
import { useClientes } from 'store/clientes';

import { Modal } from 'components';
import { MdAdd } from 'react-icons/md';

const NovoCliente = () => {
  const _dispatch = useDispatch();
  const { novoCliente, setNovoCliente } = useClientes();

  if (!novoCliente) return null;

  const _onClose = () => {
    setNovoCliente(false);
  };

  const _handleSubmit = () => {
    _dispatch(AppActions.toggleNotificacao({ mensagem: 'Novo cliente adicionado com sucesso!' }));
    _onClose();
  };

  return (
    <Modal
      open={novoCliente}
      onClose={_onClose}
      titulo="Novo cliente"
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

export default NovoCliente;
