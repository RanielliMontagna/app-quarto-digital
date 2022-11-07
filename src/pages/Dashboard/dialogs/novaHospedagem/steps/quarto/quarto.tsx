import { Grid } from '@mui/material';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import { useQuartos } from 'store/quartos';

import { CardQuarto } from 'components';
import { useFormContext } from 'react-hook-form';
import type { INovaHospedagemFormValues } from '../../novaHospedagem.types';
import { useWindowSize } from 'utils';

const Quarto = () => {
  const { setValue, watch } = useFormContext<INovaHospedagemFormValues>();
  const { width } = useWindowSize();
  const { quartos } = useQuartos();
  const _quartosVagos = quartos?.filter((quarto) => quarto.status === 0);

  return (
    <Grid container paddingX={width < 600 ? 0 : 4}>
      <Grid item xs={12}>
        <Typography weight="bold" size="sm">
          Selecione um quarto disponível
        </Typography>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {_quartosVagos?.map((quarto) => (
            <CardQuarto
              key={quarto.id}
              {...quarto}
              novaHospedagem={{
                open: true,
                quarto: watch('quarto'),
              }}
              onClick={() => setValue('quarto', quarto)}
            />
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export { Quarto };
