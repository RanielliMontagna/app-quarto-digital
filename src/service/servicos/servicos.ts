import api from 'service/api';
import { apiUrls, makeHeaders } from 'service/config';

import type { IServico, NovoServicoType } from 'store/servicos';
import type { BuscarServicosOptions } from './servicos.types';

// Buscar todos os serviços
export const buscarServicos = async ({ search }: BuscarServicosOptions) => {
  const headers = makeHeaders();
  const response = await api.get(apiUrls.servicos, {
    headers,
    params: {
      search,
    },
  });

  return response;
};

// Buscar um serviço pelo id
export const buscarServico = async (id: number) => {
  const headers = makeHeaders();
  const response = await api.get(`${apiUrls.servicos}/${id}`, { headers });

  return response;
};

// Adicionar um serviço
export const adicionarServico = async (servico: NovoServicoType) => {
  const headers = makeHeaders();
  const response = await api.post(apiUrls.servicos, servico, { headers });

  return response;
};

// Editar um serviço
export const editarServico = async (servico: IServico) => {
  const headers = makeHeaders();
  const response = await api.put(`${apiUrls.servicos}`, servico, { headers });

  return response;
};

// Excluir um serviço
export const excluirServico = async (id: number) => {
  const headers = makeHeaders();
  const response = await api.delete(`${apiUrls.servicos}/${id}`, { headers });

  return response;
};
