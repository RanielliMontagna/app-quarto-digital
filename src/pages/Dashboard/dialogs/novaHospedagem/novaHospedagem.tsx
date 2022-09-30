import { Modal } from '@rm-monorepo/modal/lib/modal/src';

import type { NovaHospedagemProps } from './novaHospedagem.types';
import { NovaHospedagemProvider, useNovaHospedagemContext } from './novaHospedagem.context';
import { useNovaHospedagem } from './useNovaHospedagem';

import { Hospede } from './steps/hospede/hospede';
import { Periodo } from './steps/periodo/periodo';
import { Resumo } from './steps/resumo/resumo';
import { Step, StepLabel, Stepper } from '@mui/material';
import { Form } from '@rm-monorepo/fields/lib/fields/src';

const NovaHospedagem = (props: NovaHospedagemProps) => {
  const { step } = useNovaHospedagemContext();
  const { onSubmit, onBack } = useNovaHospedagem(props);

  return (
    <Form onSubmit={onSubmit}>
      <Modal
        open
        onClose={props.handleCloseNovaHospedagem}
        titulo="Nova hospedagem"
        footer={{
          botaoPrimario: {
            children: step === 2 ? 'Confirmar' : 'Avançar',
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
                <StepLabel>Resumo</StepLabel>
              </Step>
            </Stepper>
          </div>
          <div>
            {step === 0 && <Hospede />}
            {step === 1 && <Periodo />}
            {step === 2 && <Resumo />}
          </div>
        </div>
      </Modal>
    </Form>
  );
};

const NovaHospedagemWrapper = (props: NovaHospedagemProps) => (
  <NovaHospedagemProvider>
    <NovaHospedagem {...props} />
  </NovaHospedagemProvider>
);

export { NovaHospedagemWrapper as NovaHospedagem };

