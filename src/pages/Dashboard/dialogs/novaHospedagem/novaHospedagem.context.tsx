import { createContext, PropsWithChildren, ReactNode, useContext, useState } from 'react';
import type { INovaHospedagemContext } from './novaHospedagem.types';

const NovaHospedagemContext = createContext({} as INovaHospedagemContext);

const NovaHospedagemProvider = ({ children }: PropsWithChildren<ReactNode>) => {
  const [step, setStep] = useState(0);

  return (
    <NovaHospedagemContext.Provider
      value={{
        step,
        setStep,
      }}
    >
      {children}
    </NovaHospedagemContext.Provider>
  );
};

const useNovaHospedagemContext = () => {
  const context = useContext(NovaHospedagemContext);

  if (!context) {
    throw new Error('useNovaHospedagem() deve ser usado com um <NovaHospedagemProvider />');
  }

  return context;
};

export { NovaHospedagemProvider, useNovaHospedagemContext, NovaHospedagemContext };

