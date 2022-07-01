import { useSelector } from 'hooks';
import React, { useState } from 'react';
import ServicosContext from '../servicosContext/servicosContext';
import { AdicionarEditarServicoDialog, ExcluirServicoDialog } from '../servicosSlice.types';

const ServicosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const servicos = useSelector(({ Servicos }) => Servicos);
  const [adicionarEditarServico, setAdicionarEditarServico] = useState<AdicionarEditarServicoDialog>({ open: false });
  const [excluirServico, setExcluirServico] = useState<ExcluirServicoDialog>({ open: false });

  return (
    <ServicosContext.Provider
      value={{ adicionarEditarServico, setAdicionarEditarServico, excluirServico, setExcluirServico, ...servicos }}
    >
      {children}
    </ServicosContext.Provider>
  );
};

export default ServicosProvider;
