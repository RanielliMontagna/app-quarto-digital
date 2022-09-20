import { DatePicker } from '@rm-monorepo/fields';
import { useNovaHospedagemContext } from '../../novaHospedagem.context';

const Periodo = () => {
  const { control } = useNovaHospedagemContext();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <DatePicker label="Informe a entrada" name="dataEntrada" control={control} fullWidth disablePast />
      <DatePicker label="Informe a saída" name="dataSaida" control={control} fullWidth disablePast />
    </div>
  );
};

export { Periodo };

