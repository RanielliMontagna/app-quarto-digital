import { AppActions } from 'store';
import { useDispatch } from 'react-redux';
import { useProdutos } from 'store/produtos';

import { Modal } from 'components';
import { MdAdd } from 'react-icons/md';

const NovoProduto = () => {
  const _dispatch = useDispatch();
  const { novoProduto, setNovoProduto } = useProdutos();

  if (!novoProduto) return null;

  const _onClose = () => {
    setNovoProduto(false);
  };

  const _handleSubmit = () => {
    _dispatch(AppActions.toggleNotificacao({ mensagem: 'Novo produto adicionado com sucesso!' }));
    _onClose();
  };

  return (
    <Modal
      open={novoProduto}
      onClose={_onClose}
      titulo="Novo produto"
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

export default NovoProduto;
