import { useFormContext } from 'react-hook-form';

import { DatePicker } from '@rm-monorepo/fields/lib/fields/src';
import { required } from '@rm-monorepo/utils/lib/rules/rules';

const Periodo = () => {
  const {
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <DatePicker
        label="Informe a entrada *"
        name="dataEntrada"
        fullWidth
        disablePast
        error={Boolean(errors?.dataEntrada)}
        helperText={errors?.dataEntrada?.message}
      />
      <DatePicker
        label="Informe a saída *"
        name="dataSaida"
        fullWidth
        disablePast
        rules={{
          ...required,
          validate: (value: string) => {
            const _dataEntrada = watch('dataEntrada');

            if (_dataEntrada && value) {
              const dataEntrada = new Date(_dataEntrada);
              const dataSaida = new Date(value);

              if (dataEntrada > dataSaida) {
                return 'A data de saída deve ser maior que a data de entrada';
              }
            }

            return undefined;
          },
        }}
        error={Boolean(errors?.dataSaida)}
        helperText={errors?.dataSaida?.message}
      />
    </div>
  );
};

export { Periodo };

