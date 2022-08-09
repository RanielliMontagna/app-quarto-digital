import { IColunas } from '@rm-monorepo/data-table/lib/dataTable/src';

export const colunasProdutos: IColunas[] = [
  {
    id: 'nome',
    label: 'Nome',
  },
  {
    id: 'preco',
    label: 'Preço',
  },
  {
    id: 'acoes',
    label: 'Ações',
    align: 'right',
  },
];
