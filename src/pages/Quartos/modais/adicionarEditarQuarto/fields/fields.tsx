import type { IFields } from '../adicionarEditarQuarto.types';

import { CurrencyField, TextField } from '@rm-monorepo/fields';
import { rules } from '@rm-monorepo/utils';

const Fields = ({ errors, control }: IFields) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <TextField
          name="identificacao"
          control={control}
          label="Identificação *"
          placeholder="Informe a identificação"
          rules={rules.required}
          fullWidth
          error={Boolean(errors?.identificacao)}
          helperText={errors?.identificacao?.message}
          autoFocus
        />
      </div>
      <div>
        <CurrencyField
          name="diaria"
          control={control}
          rules={rules.required}
          textFieldProps={{
            label: 'Diária *',
            error: Boolean(errors?.diaria),
            helperText: errors?.diaria?.message,
            size: 'small',
            fullWidth: true,
            placeholder: 'Informe a diária',
          }}
        />
      </div>
    </div>
  );
};

export default Fields;

