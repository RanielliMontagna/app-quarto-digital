import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Modal } from '@rm-monorepo/modal/lib/modal/src';

import useAdicionarEditarServico from './useAdicionarEditarServico';
import Fields from './fields/fields';

const AdicionarEditarServico = () => {
  const { open, titulo, labelBotao, initialValues, onSubmit, handleClose } = useAdicionarEditarServico();
  const {
    handleSubmit,
    register,
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
        <Fields register={register} errors={errors} control={control} />
      </Modal>
    </form>
  );
};

export default AdicionarEditarServico;

