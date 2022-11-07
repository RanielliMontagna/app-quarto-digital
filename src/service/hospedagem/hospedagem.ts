import api from 'service/api';
import { makeHeaders } from 'service/config';
import type { IAdicionarHospedagem } from './hospedagem.types';

export const adicionarHospedagem = async (hospedagem: IAdicionarHospedagem) => {
  const headers = makeHeaders();

  const response = await api.post('/hospedagem', hospedagem, {
    headers,
  });

  return response;
};
