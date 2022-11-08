import ReactApexChart from 'react-apexcharts';

import { RiHotelLine } from 'react-icons/ri';
import { FiCalendar, FiUsers } from 'react-icons/fi';
import { MdOutlineAttachMoney } from 'react-icons/md';

import { apexOptions } from './indicadores.static';
import { ContainerGrafico, ContainerIndicadores } from './indicadores.styles';
import Card from './card/card';

import { PageHeader } from '@rm-monorepo/page-header/lib/pageHeader/src';
import { Typography } from '@rm-monorepo/typography/lib/typography/src';

import { useTheme } from 'hooks';
import { useWindowSize } from 'utils';
import { useIndicadores } from './useIndicadores';
import { masks } from '@rm-monorepo/utils';

export const Indicadores = () => {
  const theme = useTheme();
  const { width } = useWindowSize();

  const { indicadores, valorAnuais } = useIndicadores();

  const taxaOcupacao = String(indicadores?.taxaOcupacao || 0).replace('.', ',') + '%';

  return (
    <ContainerIndicadores>
      <PageHeader style={{ paddingLeft: '0' }} titulo="Indicadores" />
      <div style={{ display: 'flex', gap: '16px', flexDirection: width >= 1024 ? 'row' : 'column' }}>
        <div style={{ display: 'flex', gap: '16px', flex: 1, flexDirection: width > 576 ? 'row' : 'column' }}>
          <Card titulo="Taxa de ocupação" valor={taxaOcupacao} icone={<RiHotelLine size={24} />} />
          <Card
            titulo="Nº de hóspedes"
            valor={indicadores?.hospedes || 0}
            icone={<FiUsers size={24} />}
            background="#4A3885"
          />
        </div>
        <div style={{ display: 'flex', gap: '16px', flex: 1, flexDirection: width > 576 ? 'row' : 'column' }}>
          <Card
            titulo={`Receita mensal atual`}
            valor={masks.valor(indicadores?.receitasMensais || 0)}
            icone={<MdOutlineAttachMoney size={28} />}
            background="#9AC452"
          />
          <Card
            titulo="Reservas"
            valor={indicadores?.reservas || 0}
            icone={<FiCalendar size={24} />}
            background="#784D44"
          />
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
                data: valorAnuais,
              },
            ]}
            type="area"
            height="100%"
          />
        </div>
      </ContainerGrafico>
    </ContainerIndicadores>
  );
};

export default Indicadores;
