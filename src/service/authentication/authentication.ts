import api from 'service/api';
import { apiUrls, makeHeaders } from 'service/config';

export const login = async (email: string, password: string) => {
  const response = await api.post(apiUrls.login, { email, senha: password });

  return response;
};

export const logout = async () => {
  const headers = makeHeaders();
  const response = await api.get(apiUrls.logout, { headers });

  return response;
};

export const resetarSenha = async (email: string) => {
  const response = await api.post(apiUrls.resetarSenha, { email });

  return response;
};

export const alterarSenha = async ({ token, senha }: { token: string; senha: string }) => {
  const response = await api.post(
    apiUrls.alterarSenha,
    { senha },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response;
};

