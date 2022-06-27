export interface IColunas {
  id: string;
  label: string;
  align?: 'right';
}

export interface IAcoes {
  id: string;
  label: string;
  startNode?: React.ReactElement;
  onClick: () => void;
}

export interface IDataTable {
  colunas: IColunas[];
  data: any[] & { acoes?: IAcoes[] };
}
