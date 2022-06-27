import { useForm } from 'react-hook-form';

import { Modal } from 'components';

import useAdicionarEditarProduto from './useAdicionarEditarProduto';
import Fields from './fields/fields';

const AdicionarEditarProduto = () => {
  const { open, titulo, labelBotao, initialValues, onSubmit, handleClose } = useAdicionarEditarProduto();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal
        open={open}
        onClose={handleClose}
        titulo={titulo}
        footer={{
          botaoPrimario: {
            children: labelBotao,
          },
          botaoSecundario: {
            children: 'Cancelar',
            variant: 'outlined',
            onClick: handleClose,
          },
        }}
      >
        <Fields register={register} errors={errors} />
      </Modal>
    </form>
  );
};

export default AdicionarEditarProduto;
