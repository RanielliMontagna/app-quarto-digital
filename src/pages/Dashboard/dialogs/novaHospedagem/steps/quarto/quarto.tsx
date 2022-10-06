import { Grid } from '@mui/material';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';

const Quarto = () => {
  return (
    <Grid container paddingX={4}>
      <Grid item xs={12}>
        <Typography weight="bold" size="sm">
          Selecione um quarto disponível
        </Typography>

        {/* TODO: implementar cards dos quartos */}
      </Grid>
    </Grid>
  );
};

export { Quarto };

