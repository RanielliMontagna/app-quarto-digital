import type { UseFormReturn } from 'react-hook-form';
import type { NovaHospedagemProps } from './novaHospedagem.types';

import { NovaHospedagemProvider, useNovaHospedagemContext } from './novaHospedagem.context';
import { useNovaHospedagem } from './useNovaHospedagem';

import { Step, StepLabel, Stepper } from '@mui/material';
import { Modal } from '@rm-monorepo/modal/lib/modal/src';
import { Form } from '@rm-monorepo/fields/lib/fields/src';

import { Hospede } from './steps/hospede/hospede';
import { Periodo } from './steps/periodo/periodo';
import { Resumo } from './steps/resumo/resumo';
import { Quarto } from './steps/quarto/quarto';

const NovaHospedagem = (props: NovaHospedagemProps) => {
  const { step } = useNovaHospedagemContext();
  const { onSubmit, onBack } = useNovaHospedagem(props);

  return (
    <Form onSubmit={onSubmit}>
      {(formProps: UseFormReturn) => {
        return (
          <Modal
            open
            onClose={props.handleCloseNovaHospedagem}
            titulo="Nova hospedagem"
            footer={{
              botaoPrimario: {
                children: step === 3 ? 'Confirmar' : 'Avançar',
                disabled: step === 2 && !formProps.watch('quarto'),
              },
              botaoSecundario: {
                children: step === 0 ? 'Cancelar' : 'Voltar',
                variant: 'outlined',
                onClick: onBack,
              },
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <Stepper activeStep={step} alternativeLabel>
                  <Step>
                    <StepLabel>Hospede</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Período</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Quarto</StepLabel>
                  </Step>
                  <Step>
                    <StepLabel>Resumo</StepLabel>
                  </Step>
                </Stepper>
              </div>
              <div>
                {step === 0 && <Hospede />}
                {step === 1 && <Periodo />}
                {step === 2 && <Quarto />}
                {step === 3 && <Resumo />}
              </div>
            </div>
          </Modal>
        );
      }}
    </Form>
  );
};

const NovaHospedagemWrapper = (props: NovaHospedagemProps) => (
  <NovaHospedagemProvider>
    <NovaHospedagem {...props} />
  </NovaHospedagemProvider>
);

export { NovaHospedagemWrapper as NovaHospedagem };
