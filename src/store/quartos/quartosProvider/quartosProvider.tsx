import { useSelector } from 'hooks';
import React from 'react';
import QuartosContext from '../quartosContext/quartosContext';

const QuartosProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const quartos = useSelector(({ Quartos }) => Quartos);
  const [novoQuarto, setNovoQuarto] = React.useState(false);

  return (
    <QuartosContext.Provider value={{ novoQuarto, setNovoQuarto, ...quartos }}>{children}</QuartosContext.Provider>
  );
};

export default QuartosProvider;
