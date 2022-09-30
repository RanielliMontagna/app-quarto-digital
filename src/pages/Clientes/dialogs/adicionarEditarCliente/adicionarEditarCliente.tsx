import { Modal } from '@rm-monorepo/modal/lib/modal/src';
import { Form } from '@rm-monorepo/fields/lib/fields/src';

import useAdicionarEditarCliente from './useAdicionarEditarCliente';
import Fields from './fields/fields';

const AdicionarEditarCliente = () => {
  const { open, titulo, labelBotao, initialValues, onSubmit, handleClose } = useAdicionarEditarCliente();

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

export default AdicionarEditarCliente;

