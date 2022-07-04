import { Modal, Typography } from 'components';
import useExcluirCliente from './useExcluirCliente';

const ExcluirCliente = () => {
  const { open, nome, handleSubmit, handleClose } = useExcluirCliente();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      size="sm"
      titulo="Excluir cliente"
      footer={{
        botaoPrimario: {
          children: 'Cancelar',
          variant: 'outlined',
          onClick: handleClose,
        },
        botaoSecundario: {
          children: 'Excluir',
          color: 'danger',
          onClick: handleSubmit,
        },
      }}
    >
      <>
        <Typography>
          Você está prestes a excluir o cliente <b>{nome}</b>. Você tem certeza que realmente deseja excluir?
        </Typography>
      </>
    </Modal>
  );
};

export default ExcluirCliente;
