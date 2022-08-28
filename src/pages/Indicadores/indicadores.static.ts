import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import { ApexOptions } from 'apexcharts';

import { ThemeType } from 'themes';
import { masks } from '@rm-monorepo/utils';
import { capitalize } from 'utils';

export const apexOptions = (theme: ThemeType) => {
  dayjs.extend(localeData);

  const { secundaria } = theme.cores;

  let apexOptions: ApexOptions = {
    dataLabels: { enabled: true, formatter: (value) => (!value ? '' : masks.valor(Number(value))) },
    chart: {
      toolbar: { show: false },
      zoom: {
        enabled: false,
      },
    },
    legend: { show: true },
    yaxis: {
      labels: {
        formatter: (value) => masks.valor(Number(value)),
      },
    },
    xaxis: {
      categories: dayjs.months().map((month) => capitalize(month)),
      labels: { style: { colors: secundaria } },
    },
    grid: { borderColor: `${secundaria}20` },
  };
  return apexOptions;
};

