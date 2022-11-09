import { Grid } from '@mui/material';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import { useQuartos } from 'store/quartos';

import { CardQuarto } from 'components';
import { useFormContext } from 'react-hook-form';
import type { INovaHospedagemFormValues } from '../../novaHospedagem.types';
import { useWindowSize } from 'utils';

const Quarto = () => {
  dayjs.extend(isBetween);

  const { setValue, watch } = useFormContext<INovaHospedagemFormValues>();
  const { width } = useWindowSize();
  const { quartos } = useQuartos();

  const _quartosVagos = quartos?.filter((quarto) => {
    const dataEntrada = watch('dataEntrada');
    const dataSaida = watch('dataSaida');

    if (dataEntrada && dataSaida) {
      return quarto.hospedagens.every((hospedagem) => {
        return (
          !dayjs(dataEntrada).isBetween(hospedagem.dataEntrada, hospedagem.dataSaida, null, '[]') &&
          !dayjs(dataSaida).isBetween(hospedagem.dataEntrada, hospedagem.dataSaida, null, '[]')
        );
      });
    }

    return quarto;
  });

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
