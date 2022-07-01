import { CurrencyField, TextField } from 'components';

import { IFields } from '../adicionarEditarServico.types';

const Fields = ({ register, errors, control }: IFields) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <TextField
          name="nome"
          control={control}
          label="Nome *"
          rules={{
            required: {
              value: true,
              message: 'O nome é obrigatório',
            },
          }}
          fullWidth
          error={Boolean(errors?.nome)}
          helperText={errors?.nome?.message}
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
