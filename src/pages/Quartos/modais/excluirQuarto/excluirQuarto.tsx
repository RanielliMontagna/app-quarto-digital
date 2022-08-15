import { Modal } from '@rm-monorepo/modal/lib/modal/src';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import useExcluirQuarto from './useExcluirQuarto';

const ExcluirQuarto = () => {
  const { open, identificacao, handleSubmit, handleClose } = useExcluirQuarto();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      size="sm"
      titulo="Excluir quarto"
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
          Você está prestes a excluir o quarto <b>{identificacao}</b>. Você tem certeza que realmente deseja excluir?
        </Typography>
      </>
    </Modal>
  );
};

export default ExcluirQuarto;

