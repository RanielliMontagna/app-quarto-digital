import { useFormContext } from 'react-hook-form';

import { TextField } from '@rm-monorepo/fields/lib/fields/src';
import { rules } from '@rm-monorepo/utils';

const Fields = () => {
  const {
    formState: { errors },
  } = useFormContext();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <TextField
          id="identificacao"
          name="identificacao"
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
        <TextField
          id="diaria"
          name="diaria"
          mask="valor"
          rules={rules.required}
          label="Diária *"
          error={Boolean(errors?.diaria)}
          helperText={errors?.diaria?.message}
          size="small"
          fullWidth
          placeholder="Informe a diária"
        />
      </div>
    </div>
  );
};

export default Fields;

