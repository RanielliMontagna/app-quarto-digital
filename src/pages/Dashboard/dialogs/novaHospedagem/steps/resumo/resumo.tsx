import { Divider } from '@mui/material';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';

const Resumo = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography>Entrada</Typography>
          <Typography weight="bold">01/08/2022</Typography>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Typography size="md">Saída</Typography>
          <Typography weight="bold">05/08/2022</Typography>
        </div>
      </div>
      <div>
        <div>
          Nome do hospede: <b>Ranielli Montagna</b>
        </div>
        <div>
          CPF: <b>256.012.232-43</b>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div>Observações:</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At ducimus a voluptatibus.</div>
      </div>

      <Divider style={{ borderStyle: 'dashed', borderWidth: 1 }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div>
          Período: <b>4 dias</b>
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

