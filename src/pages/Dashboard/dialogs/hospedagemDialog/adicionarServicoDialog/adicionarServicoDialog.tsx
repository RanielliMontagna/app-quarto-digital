import { Modal } from '@rm-monorepo/modal/lib/modal/src';
import { Form } from '@rm-monorepo/fields/lib/fields/src';
import { useAdicionarServicoDialog } from './useAdicionarServicoDialog';

import type { AdicionarServicoDialogFormValues, AdicionarServicoDialogProps } from './adicionarServicoDialog.types';
import { UseFormReturn } from 'react-hook-form';
import { Fields } from './fields/fields';

export const AdicionarServicoDialog = (props: AdicionarServicoDialogProps) => {
  const { handleSubmit } = useAdicionarServicoDialog(props);

  return (
    <Form onSubmit={handleSubmit}>
      {(formProps: UseFormReturn<AdicionarServicoDialogFormValues>) => {
        return (
          <Modal
            open
            onClose={props.onClose}
            titulo="Adicionar serviço"
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
