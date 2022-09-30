import { Modal } from '@rm-monorepo/modal/lib/modal/src';
import { Form } from '@rm-monorepo/fields/lib/fields/src';

import useAdicionarEditarProduto from './useAdicionarEditarProduto';
import Fields from './fields/fields';

const AdicionarEditarProduto = () => {
  const { open, titulo, labelBotao, initialValues, onSubmit, handleClose } = useAdicionarEditarProduto();

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

export default AdicionarEditarProduto;

