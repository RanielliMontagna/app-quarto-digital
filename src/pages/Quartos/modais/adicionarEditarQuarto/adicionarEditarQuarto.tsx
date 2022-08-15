import { useForm } from 'react-hook-form';
import { Modal } from '@rm-monorepo/modal/lib/modal/src';

import useAdicionarEditarQuarto from './useAdicionarEditarQuarto';
import Fields from './fields/fields';
import { useEffect } from 'react';

const AdicionarEditarQuarto = () => {
  const { open, titulo, labelBotao, initialValues, onSubmit, handleClose } = useAdicionarEditarQuarto();
  const {
    handleSubmit,
    control,
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
        <Fields errors={errors} control={control} />
      </Modal>
    </form>
  );
};

export default AdicionarEditarQuarto;

