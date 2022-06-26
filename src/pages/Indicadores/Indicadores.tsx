import { Fragment } from 'react';
import ReactApexChart from 'react-apexcharts';
import crypto from 'crypto';

import * as styled from './indicadores.styles';
import { apexOptions, DadosCards } from './indicadores.static';

import { CardIndicador, PaginaBase } from 'components';
import { useTheme } from 'hooks';

export const Indicadores = () => {
  const theme = useTheme();

  return (
    <PaginaBase titulo="Indicadores">
      <div>
        <styled.DivCards>
          {DadosCards.map(({ titulo, valor }, index) => {
            return (
              <Fragment key={crypto.randomBytes(8).toString('hex')}>
                <CardIndicador titulo={titulo} valor={valor} index={index} />
              </Fragment>
            );
          })}
        </styled.DivCards>
        <div>
          <ReactApexChart
            options={apexOptions(theme)}
            series={[
              {
                name: 'Hóspedes ativos',
                data: [5, 10, 11, 7, 4, 8, 11],
              },
            ]}
            type="area"
            height="300px"
          />
        </div>
      </div>
    </PaginaBase>
  );
};

export default Indicadores;
