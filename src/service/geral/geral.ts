import { AxiosResponse } from 'axios';

import type { IIndicadores } from './geral.types';

import api from 'service/api';
import { apiUrls, makeHeaders } from 'service/config';

// Buscar cnpj
export const buscarCnpj = async (cnpj: string) => {
  const headers = makeHeaders();
  const response = await api.get(`${apiUrls.geral}/cnpj/${cnpj}`, {
    headers,
  });

  return response;
};

// Indicadores
export const buscarIndicadores = async (): Promise<AxiosResponse<IIndicadores>> => {
  const headers = makeHeaders();
  const response = await api.get(`${apiUrls.geral}/indicadores`, {
    headers,
  });

  return response;
};
