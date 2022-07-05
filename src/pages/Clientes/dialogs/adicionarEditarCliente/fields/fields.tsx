import { DatePicker, NumberField, TextField } from 'components';
import { required, email, cpfCnpj, composeRules, phone } from 'utils/rules';

import { IFields } from '../adicionarEditarCliente.types';

const Fields = ({ errors, control }: IFields) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <NumberField
        name="cpfCnpj"
        control={control}
        label="CPF/CNPJ"
        fullWidth
        error={Boolean(errors?.cpfCnpj)}
        helperText={errors?.cpfCnpj?.message}
        mask="cpfCnpj"
        rules={cpfCnpj}
      />
      <TextField
        name="nome"
        control={control}
        label="Nome *"
        rules={required}
        fullWidth
        error={Boolean(errors?.nome)}
        helperText={errors?.nome?.message}
      />
      <TextField
        name="email"
        control={control}
        label="Email"
        rules={email}
        fullWidth
        error={Boolean(errors?.email)}
        helperText={errors?.email?.message}
      />
      <NumberField
        name="telefone"
        control={control}
        label="Telefone *"
        rules={composeRules([required, phone])}
        fullWidth
        error={Boolean(errors?.telefone)}
        helperText={errors?.telefone?.message}
        mask="phone"
      />
      <DatePicker name="dataNasc" label="Data de nascimento" control={control} />
    </div>
  );
};

export default Fields;
