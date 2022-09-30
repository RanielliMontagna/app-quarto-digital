import { Modal } from '@rm-monorepo/modal/lib/modal/src';

import useAdicionarEditarServico from './useAdicionarEditarServico';
import Fields from './fields/fields';
import { Form } from '@rm-monorepo/fields/lib/fields/src';

const AdicionarEditarServico = () => {
  const { open, titulo, labelBotao, initialValues, onSubmit, handleClose } = useAdicionarEditarServico();

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

export default AdicionarEditarServico;

