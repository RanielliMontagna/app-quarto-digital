import api from 'service/api';
import { apiUrls, makeHeaders } from 'service/config';

import type { ICliente, NovoClienteType } from 'store/clientes';
import type { BuscarClientesOptions } from './clientes.types';

// Buscar todos os serviços
export const buscarClientes = async ({ search }: BuscarClientesOptions) => {
  const headers = makeHeaders();
  const response = await api.get(apiUrls.clientes, {
    headers,
    params: {
      search,
    },
  });

  return response;
};

// Buscar um serviço pelo id
export const buscarCliente = async (id: number) => {
  const headers = makeHeaders();
  const response = await api.get(`${apiUrls.clientes}/${id}`, { headers });

  return response;
};

// Adicionar um serviço
export const adicionarCliente = async (servico: NovoClienteType) => {
  const headers = makeHeaders();
  const response = await api.post(apiUrls.clientes, servico, { headers });

  return response;
};

// Editar um serviço
export const editarCliente = async (servico: ICliente) => {
  const headers = makeHeaders();
  const response = await api.put(`${apiUrls.clientes}`, servico, { headers });

  return response;
};

// Excluir um serviço
export const excluirCliente = async (id: number) => {
  const headers = makeHeaders();
  const response = await api.delete(`${apiUrls.clientes}/${id}`, { headers });

  return response;
};
