export const composeRules = (rules: Array<Object | Function>) => {
  let objectRules = {};
  rules.forEach((rule) => {
    objectRules = { ...objectRules, ...rule };
  });
  return objectRules;
};

export const required = {
  required: {
    value: true,
    message: 'Campo obrigatório',
  },
};

export const email = {
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'O email é inválido',
  },
};

export const cpf = {
  validate: (value: string) => {
    if (value?.length !== 11) {
      return 'O CPF deve ter 11 dígitos';
    }
  },
};

export const cnpj = {
  validate: (value: string) => {
    if (value?.length !== 14) {
      return 'O CNPJ deve ter 14 dígitos';
    }
  },
};

export const cpfCnpj = {
  validate: (value: string) => {
    if (value?.length < 11) {
      return 'O CPF deve ter 11 dígitos';
    } else if (value?.length > 11 && value?.length < 14) {
      return 'O CNPJ deve ter 14 dígitos';
    }
  },
};

export const phone = {
  validate: (value: string) => {
    if (value?.length < 10) {
      return 'O telefone deve ter no mínimo 10 dígitos';
    } else if (value?.length > 11) {
      return 'O telefone deve ter no máximo 11 dígitos';
    }
  },
};

export const minLength = (min: number) => ({
  minLength: {
    value: min,
    message: `O campo deve ter no mínimo ${min} caracteres`,
  },
});

export const maxLength = (max: number) => ({
  maxLength: {
    value: max,
    message: `O campo deve ter no máximo ${max} caracteres`,
  },
});
