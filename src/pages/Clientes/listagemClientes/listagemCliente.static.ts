import { IColunas } from '@rm-monorepo/data-table/lib/dataTable/src';

export const colunasClientes: IColunas[] = [
  {
    id: 'nome',
    label: 'Nome',
  },
  {
    id: 'email',
    label: 'Email',
  },
  {
    id: 'cpfCnpj',
    label: 'CPF/CNPJ',
  },
  {
    id: 'telefone',
    label: 'Telefone',
  },
  {
    id: 'dataNasc',
    label: 'Idade/Criação',
  },
  {
    id: 'acoes',
    label: 'Ações',
    align: 'right',
  },
];

