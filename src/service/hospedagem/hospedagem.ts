import { AxiosResponse } from 'axios';
import api from 'service/api';
import { makeHeaders } from 'service/config';

import type { DadosHospedagem, IAdicionarHospedagem, IAdicionarProduto, IAdicionarServico } from './hospedagem.types';

export const adicionarHospedagem = async (hospedagem: IAdicionarHospedagem) => {
  const headers = makeHeaders();

  const response = await api.post('/hospedagem', hospedagem, {
    headers,
  });

  return response;
};

export const buscarHospedagem = async (id: number): Promise<AxiosResponse<DadosHospedagem>> => {
  const headers = makeHeaders();

  const response = await api.get(`/hospedagem/${id}`, {
    headers,
  });

  return response;
};

export const adicionarProdutoHospedagem = async (payload: IAdicionarProduto) => {
  const headers = makeHeaders();

  const response = await api.post('/hospedagem/produto', payload, {
    headers,
  });

  return response;
};

export const adicionarServicoHospedagem = async (payload: IAdicionarServico) => {
  const headers = makeHeaders();

  const response = await api.post('/hospedagem/servico', payload, {
    headers,
  });

  return response;
};
