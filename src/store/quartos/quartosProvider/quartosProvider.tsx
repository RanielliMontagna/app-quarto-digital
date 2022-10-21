import React, { useState } from 'react';

import QuartosContext from '../quartosContext/quartosContext';
import type { AdicionarEditarQuartoDialog, ExcluirQuartoDialog } from '../quartosSlice.types';

import { useSelector } from 'hooks';
import AdicionarEditarQuarto from 'shared/quartos/adicionarEditarQuarto/adicionarEditarQuarto';

const QuartosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const quartos = useSelector(({ Quartos }) => Quartos);
  const [adicionarEditarQuarto, setAdicionarEditarQuarto] = useState<AdicionarEditarQuartoDialog>({ open: false });
  const [excluirQuarto, setExcluirQuarto] = useState<ExcluirQuartoDialog>({ open: false });

  return (
    <QuartosContext.Provider
      value={{ adicionarEditarQuarto, setAdicionarEditarQuarto, excluirQuarto, setExcluirQuarto, ...quartos }}
    >
      {children}
      {adicionarEditarQuarto.open && <AdicionarEditarQuarto />}
    </QuartosContext.Provider>
  );
};

export default QuartosProvider;
