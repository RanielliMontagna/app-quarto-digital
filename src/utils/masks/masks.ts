export const valor = (valor: number | string) => {
  const valorTwoDecimalCases = Number(valor).toFixed(2);
  return Number(valorTwoDecimalCases).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const cpf = (valor: number | string) => {
  if (String(valor).length === 11) {
    return String(valor).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
  }
  return valor;
};

export const cnpj = (valor: number | string) => {
  if (String(valor).length === 14) {
    return String(valor).replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g, '$1.$2.$3/$4-$5');
  }
  return valor;
};

export const cpfCnpj = (valor: number | string) => {
  if (String(valor).length === 11) {
    return cpf(valor);
  }
  if (String(valor).length === 14) {
    return cnpj(valor);
  }
  return valor;
};

export const phone8Digits = (valor: number | string) => {
  if (String(valor).length === 10) {
    return String(valor).replace(/(\d{2})(\d{4})(\d{4})/g, '($1) $2-$3');
  }
  return valor;
};

export const phone9Digits = (valor: number | string) => {
  if (String(valor).length === 11) {
    return String(valor).replace(/(\d{2})(\d{5})(\d{4})/g, '($1) $2-$3');
  }
  return valor;
};

export const phone = (valor: number | string) => {
  if (String(valor).length === 10) {
    return phone8Digits(valor);
  }
  if (String(valor).length === 11) {
    return phone9Digits(valor);
  }
  return valor;
};
