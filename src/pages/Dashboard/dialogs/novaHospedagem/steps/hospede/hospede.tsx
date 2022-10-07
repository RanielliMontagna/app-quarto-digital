import { useFormContext } from 'react-hook-form';

import type { INovaHospedagemFormValues } from '../../novaHospedagem.types';

import { Grid } from '@mui/material';
import { TextField, Creatable } from '@rm-monorepo/fields/lib/fields/src';

import { required } from '@rm-monorepo/utils/lib/rules/rules';
import { useHospede } from './useHospede';
import { useClientes } from 'store/clientes';

const Hospede = () => {
  const {
    setValue,
    watch,
    formState: { errors },
  } = useFormContext<INovaHospedagemFormValues>();

  const { optionsClientes } = useHospede();
  const { setAdicionarEditarCliente } = useClientes();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Creatable
          name="hospede"
          placeholder="Selecionar hóspede"
          textFieldProps={{
            label: 'Hóspede *',
            error: Boolean(errors?.hospede),
            helperText: errors?.hospede?.message,
          }}
          value={typeof watch('hospede') === 'object' ? (watch('hospede') as any) : undefined}
          rules={required}
          onCreateOption={(value) =>
            setAdicionarEditarCliente({
              open: true,
              nome: value,
              callback: (cliente) => {
                setValue('hospede', {
                  label: cliente.nome,
                  value: cliente.id,
                });
              },
            })
          }
          options={optionsClientes || []}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField name="observacao" label="Observação" fullWidth />
      </Grid>
    </Grid>
  );
};

export { Hospede };

