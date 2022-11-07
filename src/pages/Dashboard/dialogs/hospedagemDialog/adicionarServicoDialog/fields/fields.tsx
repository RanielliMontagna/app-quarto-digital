import { useEffect } from 'react';

import { Grid } from '@mui/material';
import { Autocomplete, TextField } from '@rm-monorepo/fields/lib/fields/src';

import { ServicosActions, useServicos } from 'store/servicos';
import { useDispatch } from 'store/hooks';
import { useFormContext } from 'react-hook-form';
import { AdicionarServicoDialogFormValues } from '../adicionarServicoDialog.types';
import { masks } from '@rm-monorepo/utils';
import { required } from '@rm-monorepo/utils/lib/rules/rules';

const Fields = () => {
  const _dispatch = useDispatch();
  const { servicos } = useServicos();
  const {
    watch,
    formState: { errors },
  } = useFormContext<AdicionarServicoDialogFormValues>();

  useEffect(() => {
    if (!servicos?.length) {
      _dispatch(ServicosActions.buscarServicos({}));
    }
  }, [_dispatch, servicos]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Autocomplete
          name="servico"
          label="Serviço"
          variant="outlined"
          options={
            servicos?.map((servico) => ({
              label: servico.nome,
              value: servico.id,
              preco: servico.preco,
              nome: servico.nome,
            })) || []
          }
          required
          rules={required}
          error={Boolean(errors.servico)}
          helperText={errors.servico?.message}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="quantidade"
          label="Quantidade"
          mask="numero"
          required
          rules={required}
          error={Boolean(errors?.quantidade)}
          helperText={errors?.quantidade?.message}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          name="preco"
          label="Preço"
          mask="valor"
          value={watch()?.servico?.preco ? masks.valor(watch()?.servico?.preco) : ''}
          disabled
        />
      </Grid>
    </Grid>
  );
};

export { Fields };
