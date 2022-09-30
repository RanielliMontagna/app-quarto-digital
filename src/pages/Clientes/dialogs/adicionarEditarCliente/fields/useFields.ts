import { useEffect } from 'react';

import type { ICnpj } from 'hooks';
import dayjs from 'dayjs';
import { useFormContext } from 'react-hook-form';

interface IUseFields {
  cnpj?: ICnpj;
}

export const useFields = ({ cnpj }: IUseFields) => {
  const { setValue } = useFormContext();

  useEffect(() => {
    if (cnpj) {
      setValue('nome', cnpj?.nome ?? '');
      setValue('email', cnpj?.email ?? '');
      setValue('telefone', cnpj?.telefone ?? '');
      setValue(
        'dataNasc',
        cnpj?.data_situacao ? dayjs(cnpj?.data_situacao, 'DD/MM/YYYY').format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]') : ''
      );
    }
  }, [cnpj, setValue]);

  return {};
};

