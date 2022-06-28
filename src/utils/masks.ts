export const valor = (valor: number | string) => {
  const valorTwoDecimalCases = Number(valor).toFixed(2);
  return Number(valorTwoDecimalCases).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};
