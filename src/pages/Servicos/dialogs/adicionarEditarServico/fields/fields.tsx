import { CurrencyField, TextField } from 'components';
import { required } from 'utils/rules';

import { IFields } from '../adicionarEditarServico.types';

const Fields = ({ errors, control }: IFields) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <TextField
          name="nome"
          control={control}
          label="Nome *"
          rules={required}
          fullWidth
          error={Boolean(errors?.nome)}
          helperText={errors?.nome?.message}
        />
      </div>
      <div>
        <CurrencyField
          name="preco"
          control={control}
          rules={required}
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
