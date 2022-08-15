import api from 'service/api';
import { apiUrls, makeHeaders } from 'service/config';

import type { NovoQuartoType } from 'store/quartos';
import type { BuscarQuartosOptions } from './quartos.types';

// Buscar todos os quartos
export const buscarQuartos = async ({ search }: BuscarQuartosOptions) => {
  const headers = makeHeaders();
  const response = await api.get(apiUrls.quartos, {
    headers,
    params: {
      search,
    },
  });

  return response;
};

// Buscar um produto pelo id
export const buscarQuarto = async (id: number) => {
  const headers = makeHeaders();
  const response = await api.get(`${apiUrls.quartos}/${id}`, { headers });

  return response;
};

// Adicionar um produto
export const adicionarQuarto = async (produto: NovoQuartoType) => {
  const headers = makeHeaders();
  const response = await api.post(apiUrls.quartos, produto, { headers });

  return response;
};

// Editar um produto
export const editarQuarto = async (produto: NovoQuartoType & { id: number }) => {
  const headers = makeHeaders();
  const response = await api.put(`${apiUrls.quartos}`, produto, { headers });

  return response;
};

// Excluir um produto
export const excluirQuarto = async (id: number) => {
  const headers = makeHeaders();
  const response = await api.delete(`${apiUrls.quartos}/${id}`, { headers });

  return response;
};

//TODO: adicionar endpoint para atualizar status de um quarto

