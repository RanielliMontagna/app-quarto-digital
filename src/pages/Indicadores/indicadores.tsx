import ReactApexChart from 'react-apexcharts';
import { RiHotelLine } from 'react-icons/ri';
import { FiCalendar, FiUsers } from 'react-icons/fi';
import { MdOutlineAttachMoney } from 'react-icons/md';

import { apexOptions } from './indicadores.static';
import { ContainerGrafico } from './indicadores.styles';

import { PageHeader } from '@rm-monorepo/page-header/lib/pageHeader/src';

import { useTheme } from 'hooks';
import { useWindowSize } from 'utils';

import Card from './card/card';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';

export const Indicadores = () => {
  const theme = useTheme();
  const { width } = useWindowSize();

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100% - 60px)',
        overflow: 'auto',
        padding: '0px 24px',
      }}
    >
      <PageHeader style={{ paddingLeft: '0' }} titulo="Indicadores" />
      <div style={{ display: 'flex', gap: '16px', flexDirection: width >= 1024 ? 'row' : 'column' }}>
        <div style={{ display: 'flex', gap: '16px', flex: 1, flexDirection: width > 576 ? 'row' : 'column' }}>
          <Card titulo="Taxa de ocupação" valor="48.04%" icone={<RiHotelLine size={24} />} />
          <Card titulo="Nº de hóspedes" valor="10" icone={<FiUsers size={24} />} background="#4A3885" />
        </div>
        <div style={{ display: 'flex', gap: '16px', flex: 1, flexDirection: width > 576 ? 'row' : 'column' }}>
          <Card
            titulo={`Receita mensal atual`}
            valor="R$ 1240,00"
            icone={<MdOutlineAttachMoney size={28} />}
            background="#9AC452"
          />
          <Card titulo="Reservas" valor="15" icone={<FiCalendar size={24} />} background="#784D44" />
        </div>
      </div>
      <ContainerGrafico>
        <div>
          <Typography weight="bold" size="md">
            Indicadores anuais
          </Typography>
        </div>
        <div style={{ flex: 1 }}>
          <ReactApexChart
            options={apexOptions(theme)}
            series={[
              {
                name: 'Receita no mês',
                data: [0, 0, 0, 500, 700, 900, 1400, 450, 700, 1500, 1400, 1000],
              },
            ]}
            type="area"
            height="100%"
          />
        </div>
      </ContainerGrafico>
    </div>
  );
};

export default Indicadores;

