import { Modal } from '@rm-monorepo/modal/lib/modal/src';
import { Form } from '@rm-monorepo/fields/lib/fields/src';
import { useAdicionarProdutoDialog } from './useAdicionarProdutoDialog';

import type { AdicionarProdutoDialogFormValues, AdicionarProdutoDialogProps } from './adicionarProdutoDialog.types';
import { UseFormReturn } from 'react-hook-form';
import { Fields } from './fields/fields';

export const AdicionarProdutoDialog = (props: AdicionarProdutoDialogProps) => {
  const { handleSubmit } = useAdicionarProdutoDialog(props);

  return (
    <Form onSubmit={handleSubmit}>
      {(formProps: UseFormReturn<AdicionarProdutoDialogFormValues>) => {
        return (
          <Modal
            open
            onClose={props.onClose}
            titulo="Adicionar produto"
            size="sm"
            footer={{
              botaoPrimario: {
                children: 'Adicionar',
                onClick: formProps.handleSubmit(handleSubmit),
              },
              botaoSecundario: {
                children: 'Cancelar',
                onClick: props.onClose,
                variant: 'outlined',
              },
            }}
          >
            <Fields />
          </Modal>
        );
      }}
    </Form>
  );
};
