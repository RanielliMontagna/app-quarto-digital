import { AxiosResponse } from 'axios';
import api from 'service/api';
import { makeHeaders } from 'service/config';

import type {
  BuscarHospedagensOptions,
  DadosHospedagem,
  IAdicionarHospedagem,
  IAdicionarProduto,
  IAdicionarServico,
  IAlterarStatusHospedagem,
  ICheckout,
} from './hospedagem.types';

export const adicionarHospedagem = async (hospedagem: IAdicionarHospedagem) => {
  const headers = makeHeaders();

  const response = await api.post('/hospedagem', hospedagem, {
    headers,
  });

  return response;
};

export const buscarHospedagens = async (params: BuscarHospedagensOptions) => {
  const headers = makeHeaders();

  const response = await api.get('/hospedagem', { headers, params });

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

export const checkoutHospedagem = async (payload: ICheckout) => {
  const headers = makeHeaders();

  const response = await api.post('/hospedagem/checkout', payload, { headers });

  return response;
};

export const alterarStatusHospedagem = async (payload: IAlterarStatusHospedagem) => {
  const headers = makeHeaders();

  const response = await api.put('/hospedagem/status', payload, { headers });

  return response;
};
