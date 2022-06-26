import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Configuracoes from 'pages/Configuracoes/Configuracoes';
import { useAuth } from 'store/auth';

// Rotas Privadas
import { Clientes, Dashboard, Indicadores, MinhaConta, Produtos, Quartos, Servicos } from 'pages';

//Rotas Publicas
import { Login, Erro } from 'pages';

// Componente renderizado ao redor de todas as rotas
import { Public, Private } from 'components';

export const Router = () => {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated ? (
          <Route path="/" element={<Public />}>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/erro" element={<Erro />} />
            <Route path="*" element={<Navigate to="/erro" />} />
          </Route>
        ) : (
          <Route path="/" element={<Private />}>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/login" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/indicadores" element={<Indicadores />} />
            <Route path="/quartos" element={<Quartos />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/produtos" element={<Produtos />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/configuracoes" element={<Configuracoes />} />
            <Route path="/minha-conta" element={<MinhaConta />} />
            <Route path="/erro" element={<Erro />} />
            <Route path="*" element={<Navigate to="/erro" />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};
