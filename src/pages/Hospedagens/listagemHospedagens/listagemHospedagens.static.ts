import { IColunas } from '@rm-monorepo/data-table/lib/dataTable/src';

export const colunasHospedagens: IColunas[] = [
  {
    id: 'cliente',
    label: 'Cliente',
  },
  {
    id: 'quarto',
    label: 'Quarto',
  },
  {
    id: 'dataEntrada',
    label: 'Data entrada',
  },
  {
    id: 'dataSaida',
    label: 'Data saída',
  },
  {
    id: 'status',
    label: 'Status',
  },
  {
    id: 'valor',
    label: 'Valor total (R$)',
  },
  {
    id: 'acoes',
    label: 'Ações',
    align: 'right',
  },
];
