export interface IIndicadores {
  taxaOcupacao: number;
  hospedes: number;
  reservas: number;

  receitasMensais: number;
  receitasAnuais: {
    mes: number;
    valor: number;
  }[];
}
