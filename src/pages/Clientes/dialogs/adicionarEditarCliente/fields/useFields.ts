import { useEffect } from 'react';

import type { ICnpj } from 'hooks';
import type { UseFormSetValue } from 'react-hook-form';
import type { AdicionarEditarClienteFormValues } from '../adicionarEditarCliente.types';
import dayjs from 'dayjs';

interface IUseFields {
  cnpj?: ICnpj;
  setValue: UseFormSetValue<AdicionarEditarClienteFormValues>;
}

export const useFields = ({ cnpj, setValue }: IUseFields) => {
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

