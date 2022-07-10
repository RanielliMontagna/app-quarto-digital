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

