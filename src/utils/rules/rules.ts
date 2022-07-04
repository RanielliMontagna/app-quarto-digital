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
