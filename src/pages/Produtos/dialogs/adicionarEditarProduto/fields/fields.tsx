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
          name="nome"
          label="Nome *"
          id="nome"
          placeholder="Informe o nome"
          rules={rules.required}
          fullWidth
          error={Boolean(errors?.nome)}
          helperText={errors?.nome?.message}
          autoFocus
        />
      </div>
      <div>
        <TextField
          name="preco"
          label="Preço *"
          id="preco"
          rules={rules.required}
          mask="valor"
          error={Boolean(errors?.preco)}
          helperText={errors?.preco?.message}
          size="small"
          fullWidth
          placeholder="Informe o preço"
        />
      </div>
    </div>
  );
};

export default Fields;

