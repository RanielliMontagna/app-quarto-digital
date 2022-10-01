import { TextField } from '@rm-monorepo/fields/lib/fields/src';
import { rules } from '@rm-monorepo/utils';
import { useFormContext } from 'react-hook-form';

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
          rules={rules.required}
          label="Preço *"
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

