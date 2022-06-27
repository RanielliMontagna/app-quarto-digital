import api from 'service/api';
import { apiUrls, makeHeaders } from 'service/config';

import type { IProduto, NovoProdutoType } from 'store/produtos';

// Buscar todos os produtos
export const buscarProdutos = async () => {
  const headers = makeHeaders();
  const response = await api.get(apiUrls.produtos, { headers });

  return response;
};

// Buscar um produto pelo id
export const buscarProduto = async (id: number) => {
  const headers = makeHeaders();
  const response = await api.get(`${apiUrls.produtos}/${id}`, { headers });

  return response;
};

// Adicionar um produto
export const adicionarProduto = async (produto: NovoProdutoType) => {
  const headers = makeHeaders();
  const response = await api.post(apiUrls.produtos, produto, { headers });

  return response;
};

// Editar um produto
export const editarProduto = async (produto: IProduto) => {
  const headers = makeHeaders();
  const response = await api.put(`${apiUrls.produtos}`, produto, { headers });

  return response;
};

// Excluir um produto
export const excluirProduto = async (id: number) => {
  const headers = makeHeaders();
  const response = await api.delete(`${apiUrls.produtos}/${id}`, { headers });

  return response;
};
