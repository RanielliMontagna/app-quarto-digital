import { AppActions } from 'store';
import { useDispatch } from 'react-redux';
import { useQuartos } from 'store/quartos';

import { Modal } from '@rm-monorepo/modal/lib/modal/src';
import { MdAdd } from 'react-icons/md';

const NovoQuarto = () => {
  const _dispatch = useDispatch();
  const { novoQuarto, setNovoQuarto } = useQuartos();

  if (!novoQuarto) return null;

  const _onClose = () => {
    setNovoQuarto(false);
  };

  const _handleSubmit = () => {
    _dispatch(AppActions.toggleNotificacao({ mensagem: 'Novo quarto adicionado com sucesso!' }));
    _onClose();
  };

  return (
    <Modal
      open={novoQuarto}
      onClose={_onClose}
      titulo="Novo quarto"
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

export default NovoQuarto;

