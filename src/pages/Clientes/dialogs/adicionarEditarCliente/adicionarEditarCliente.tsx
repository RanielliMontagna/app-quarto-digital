import { useForm } from 'react-hook-form';

import { Modal } from 'components';

import useAdicionarEditarCliente from './useAdicionarEditarCliente';
import Fields from './fields/fields';
import { useEffect } from 'react';

const AdicionarEditarCliente = () => {
  const { open, titulo, labelBotao, initialValues, onSubmit, handleClose } = useAdicionarEditarCliente();
  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: initialValues,
  });

  useEffect(() => {
    reset(initialValues);
  }, [initialValues, reset]);

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
        <Fields errors={errors} control={control} setValue={setValue} />
      </Modal>
    </form>
  );
};

export default AdicionarEditarCliente;

