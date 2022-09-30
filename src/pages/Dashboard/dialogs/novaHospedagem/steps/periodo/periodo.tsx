import { DatePicker } from '@rm-monorepo/fields/lib/fields/src';

const Periodo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <DatePicker label="Informe a entrada" name="dataEntrada" fullWidth disablePast />
      <DatePicker label="Informe a saída" name="dataSaida" fullWidth disablePast />
    </div>
  );
};

export { Periodo };

