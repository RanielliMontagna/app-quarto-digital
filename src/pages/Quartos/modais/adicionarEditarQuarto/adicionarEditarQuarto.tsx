import { Modal } from '@rm-monorepo/modal/lib/modal/src';

import useAdicionarEditarQuarto from './useAdicionarEditarQuarto';
import Fields from './fields/fields';
import { Form } from '@rm-monorepo/fields/lib/fields/src';

const AdicionarEditarQuarto = () => {
  const { open, titulo, labelBotao, initialValues, onSubmit, handleClose } = useAdicionarEditarQuarto();

  return (
    <Form onSubmit={onSubmit} defaultValues={initialValues}>
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
        <Fields />
      </Modal>
    </Form>
  );
};

export default AdicionarEditarQuarto;

