import api from 'service/api';
import { apiUrls, makeHeaders } from 'service/config';

export const buscarProdutos = async () => {
  const headers = makeHeaders();
  const response = await api.get(apiUrls.produtos, { headers });

  return response;
};
