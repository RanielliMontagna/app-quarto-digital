import { ApexOptions } from 'apexcharts';
import { ThemeType } from 'themes';

export const DadosCards = [
  {
    titulo: 'Taxa de ocupação',
    valor: 10,
  },
  {
    titulo: 'N° de hóspedes',
    valor: 2,
  },
  {
    titulo: 'Receitas',
    valor: 2485,
  },
  {
    titulo: 'Despesas',
    valor: 1300,
  },
];

export const DiasSemanais = [
  'Domingo',
  'Segunda-feira',
  'Terça-feira',
  'Quarta-feira',
  'Quinta-feira',
  'Sexta-feira',
  'Sábado',
];

export const apexOptions = (theme: ThemeType) => {
  const { secundaria } = theme.cores;

  let apexOptions: ApexOptions = {
    dataLabels: {
      enabled: true,
    },
    chart: {
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
    },
    xaxis: {
      categories: DiasSemanais,
      labels: {
        style: {
          colors: secundaria,
        },
      },
    },
    grid: {
      borderColor: `${secundaria}20`,
    },
  };
  return apexOptions;
};
