import { TextField } from '@mui/material';

import { IFields } from '../adicionarEditarProduto.types';

const Fields = ({ register, errors }: IFields) => {
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
        <TextField
          label="Preço *"
          error={Boolean(errors?.preco)}
          helperText={errors?.preco?.message}
          size="small"
          variant="outlined"
          fullWidth
          {...register('preco', {
            required: {
              value: true,
              message: 'O preço é obrigatório',
            },
          })}
        />
      </div>
    </div>
  );
};

export default Fields;
