import { Modal } from 'components';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import useExcluirProduto from './useExcluirProduto';

const ExcluirProduto = () => {
  const { open, nome, handleSubmit, handleClose } = useExcluirProduto();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      size="sm"
      titulo="Excluir produto"
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
          Você está prestes a excluir o produto <b>{nome}</b>. Você tem certeza que realmente deseja excluir?
        </Typography>
      </>
    </Modal>
  );
};

export default ExcluirProduto;

