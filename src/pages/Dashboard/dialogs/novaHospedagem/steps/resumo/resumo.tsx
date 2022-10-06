import { useFormContext } from 'react-hook-form';

import type { INovaHospedagemFormValues } from '../../novaHospedagem.types';

import { Divider } from '@mui/material';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';
import dayjs from 'dayjs';

const Resumo = () => {
  const { getValues } = useFormContext<INovaHospedagemFormValues>();
  const _values = getValues();

  const _diasHospedagem = dayjs(_values.dataSaida).diff(_values.dataEntrada, 'day');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography>Entrada</Typography>
          <Typography weight="bold">{dayjs(_values?.dataEntrada).format('DD/MM/YYYY')}</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography size="md">Saída</Typography>
          <Typography weight="bold">{dayjs(_values?.dataSaida).format('DD/MM/YYYY')}</Typography>
        </div>
      </div>
      <div>
        <div>
          Nome do hospede: <b>{_values?.hospede?.label}</b>
        </div>
      </div>
      {Boolean(_values?.observacao) && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div>Observações:</div>
          <div>{_values?.observacao}</div>
        </div>
      )}

      <Divider style={{ borderStyle: 'dashed', borderWidth: 1 }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div>
          Período:{' '}
          <b>
            {_diasHospedagem} {_diasHospedagem === 1 ? 'Dia' : 'Dias'}
          </b>
        </div>
        <div>
          Valor diária: <b>R$ 60,00</b>
        </div>
        <Divider />
        <div>
          Valor total: <b>R$ 240,00</b>
        </div>
      </div>
    </div>
  );
};

export { Resumo };

