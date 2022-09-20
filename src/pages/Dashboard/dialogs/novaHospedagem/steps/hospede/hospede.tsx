import { TextField } from '@rm-monorepo/fields';
import { useNovaHospedagemContext } from '../../novaHospedagem.context';

const Hospede = () => {
  const { control } = useNovaHospedagemContext();

  return (
    <div>
      <TextField name="observacao" label="Observação" control={control} fullWidth />
    </div>
  );
};

export { Hospede };

