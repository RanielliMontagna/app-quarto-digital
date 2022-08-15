import type { IFields } from '../adicionarEditarProduto.types';

import { CurrencyField, TextField } from '@rm-monorepo/fields';
import { rules } from '@rm-monorepo/utils';

const Fields = ({ errors, control }: IFields) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <TextField
          name="nome"
          control={control}
          label="Nome *"
          placeholder="Informe o nome"
          rules={rules.required}
          fullWidth
          error={Boolean(errors?.nome)}
          helperText={errors?.nome?.message}
          autoFocus
        />
      </div>
      <div>
        <CurrencyField
          name="preco"
          control={control}
          rules={rules.required}
          textFieldProps={{
            label: 'Preço *',
            error: Boolean(errors?.preco),
            helperText: errors?.preco?.message,
            size: 'small',
            fullWidth: true,
            placeholder: 'Informe o preço',
          }}
        />
      </div>
    </div>
  );
};

export default Fields;

