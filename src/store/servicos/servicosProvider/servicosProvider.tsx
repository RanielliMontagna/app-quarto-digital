import { useSelector } from 'hooks';
import React from 'react';
import ServicosContext from '../servicosContext/servicosContext';

const ServicosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const servicos = useSelector(({ Servicos }) => Servicos);
  const [novoServico, setNovoServico] = React.useState(false);

  return (
    <ServicosContext.Provider value={{ novoServico, setNovoServico, ...servicos }}>{children}</ServicosContext.Provider>
  );
};

export default ServicosProvider;
