import { CircularProgress } from '@mui/material';
import { NumberField, TextField, DatePicker } from '@rm-monorepo/fields/lib/fields/src';

import { useCnpj } from 'hooks';
import { rules } from '@rm-monorepo/utils';

import { useFields } from './useFields';
import { useFormContext } from 'react-hook-form';

const Fields = () => {
  const { cpfCnpj, required, email, phone, composeRules } = rules;
  const { buscarCnpj, cnpj, loading } = useCnpj();
  const {
    formState: { errors },
  } = useFormContext();

  // Lógicas dos fields (no momento somente o CNPJ)
  useFields({ cnpj });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <NumberField
        name="cpfCnpj"
        label="CPF/CNPJ"
        placeholder="Informe o cpf ou cnpj"
        fullWidth
        disabled={loading}
        InputProps={{
          endAdornment: loading && <CircularProgress size={20} />,
        }}
        error={Boolean(errors?.cpfCnpj)}
        helperText={errors?.cpfCnpj?.message}
        mask="cpfCnpj"
        onInputChange={(value) => {
          if (value.length === 14) {
            buscarCnpj(value);
          }
        }}
        rules={cpfCnpj}
        autoFocus
      />
      <TextField
        name="nome"
        label="Nome *"
        placeholder="Informe o nome"
        rules={required}
        fullWidth
        error={Boolean(errors?.nome)}
        helperText={errors?.nome?.message}
      />
      <TextField
        name="email"
        label="Email"
        placeholder="Informe o email"
        rules={email}
        fullWidth
        error={Boolean(errors?.email)}
        helperText={errors?.email?.message}
      />
      <NumberField
        name="telefone"
        label="Telefone *"
        placeholder="Informe o telefone"
        rules={composeRules([required, phone])}
        fullWidth
        error={Boolean(errors?.telefone)}
        helperText={errors?.telefone?.message}
        mask="phone"
      />
      <DatePicker name="dataNasc" label="Data de nascimento" />
    </div>
  );
};

export default Fields;

