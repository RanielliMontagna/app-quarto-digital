import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppActions } from 'store';

import { buscarCnpj as buscarCnpjApi } from 'service';
import { ICnpj } from './useCnpj.types';

const useCnpj = () => {
  const [cnpj, _setCnpj] = useState<ICnpj>();
  const [loading, _setLoading] = useState(false);
  const _dispatch = useDispatch();

  const buscarCnpj = async (cnpj: string) => {
    _setLoading(true);
    try {
      const { status, data } = await buscarCnpjApi(cnpj);
      if (status === 200) {
        _setCnpj(data);
      } else {
        _dispatch(
          AppActions.toggleNotificacao({
            mensagem: 'Não é possível buscar informações do CNPJ',
            variante: 'warning',
            autoHideDuration: 3000,
          })
        );
      }
    } catch (error) {
      _dispatch(
        AppActions.toggleNotificacao({
          mensagem: 'Não é possível buscar informações do CNPJ',
          variante: 'warning',
          autoHideDuration: 3000,
        })
      );
    }
    _setLoading(false);
  };

  return { cnpj, loading, buscarCnpj };
};

export default useCnpj;

