import { useCallback } from 'react';
import { masks } from './masks.static';
import { MasksType } from './numberField.types';

export const useMasks = (mask?: MasksType) => {
  const objMask = useCallback(
    (value: string) => {
      const valueWithoutMask = value?.replace(/[^\d]/g, '');

      switch (mask) {
        case 'cpf':
          return masks.cpf;
        case 'cnpj':
          return masks.cnpj;
        case 'cpfCnpj':
          if (valueWithoutMask?.length < 11) {
            return masks.cpf;
          } else if (valueWithoutMask?.length > 11) {
            return masks.cnpj;
          } else {
            return {
              format: '###.###.###-###',
            };
          }
        case 'phone':
          if (valueWithoutMask?.length < 10) {
            return masks.phone8Digits;
          } else if (valueWithoutMask?.length > 10) {
            return masks.phone9Digits;
          } else {
            return {
              format: '(##) ####-#####',
            };
          }
        default:
          return {};
      }
    },
    [mask]
  );

  return {
    objMask,
  };
};
