import { Modal, Typography } from 'components';
import useExcluirServico from './useExcluirServico';

const ExcluirServico = () => {
  const { open, nome, handleSubmit, handleClose } = useExcluirServico();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      size="sm"
      titulo="Excluir serviço"
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
          Você está prestes a excluir o serviço <b>{nome}</b>. Você tem certeza que realmente deseja excluir?
        </Typography>
      </>
    </Modal>
  );
};

export default ExcluirServico;
