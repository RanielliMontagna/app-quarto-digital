import { Modal } from '@rm-monorepo/modal/lib/modal/src';
import { Grid } from '@mui/material';

import { CancelarHospedagemDialogProps } from './cancelarHospedagemDialog.types';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import { useCancelarHospadagemDialog } from './useCancelarHospedagemDialog';

const CancelarHospedagemDialog = (props: CancelarHospedagemDialogProps) => {
  const { handleCancelarHospedagem } = useCancelarHospadagemDialog(props);

  return (
    <Modal
      open
      onClose={props.onClose}
      titulo="Cancelar hospedagem?"
      footer={{
        botaoPrimario: {
          children: 'Cancelar',
          variant: 'outlined',
          onClick: props.onClose,
        },
        botaoSecundario: {
          children: 'Cancelar hospedagem',
          color: 'danger',
          onClick: handleCancelarHospedagem,
        },
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography>Você tem certeza que deseja cancelar a hospedagem?</Typography>
        </Grid>
      </Grid>
    </Modal>
  );
};

export { CancelarHospedagemDialog };
