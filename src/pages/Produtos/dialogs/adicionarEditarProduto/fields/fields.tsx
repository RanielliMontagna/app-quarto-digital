import { TextField } from '@mui/material';
import { CurrencyField } from 'components';

import { IFields } from '../adicionarEditarProduto.types';

const Fields = ({ register, errors, control }: IFields) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <TextField
          label="Nome *"
          error={Boolean(errors?.nome)}
          helperText={errors?.nome?.message}
          size="small"
          variant="outlined"
          fullWidth
          {...register('nome', {
            required: {
              value: true,
              message: 'O nome é obrigatório',
            },
          })}
        />
      </div>
      <div>
        <CurrencyField
          name="preco"
          control={control}
          rules={{
            required: {
              value: true,
              message: 'O preço é obrigatório',
            },
          }}
          textFieldProps={{
            label: 'Preço *',
            error: Boolean(errors?.preco),
            helperText: errors?.preco?.message,
            size: 'small',
            fullWidth: true,
          }}
        />
      </div>
    </div>
  );
};

export default Fields;
