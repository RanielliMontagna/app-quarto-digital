import { createContext, PropsWithChildren, ReactNode, useContext, useState } from 'react';
import type { IRedefinirSenhaContext } from './redefinirSenha.types';

const RedefinirSenhaContext = createContext({} as IRedefinirSenhaContext);

const RedefinirSenhaProvider = ({ children }: PropsWithChildren<ReactNode>) => {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');

  return (
    <RedefinirSenhaContext.Provider
      value={{
        step,
        setStep,
        email,
        setEmail,
      }}
    >
      {children}
    </RedefinirSenhaContext.Provider>
  );
};

const useRedefinirSenhaContext = () => {
  const context = useContext(RedefinirSenhaContext);

  if (!context) {
    throw new Error('useRedefinirSenha() deve ser usado com um <RedefinirSenhaProvider />');
  }

  return context;
};

export { RedefinirSenhaProvider, useRedefinirSenhaContext, RedefinirSenhaContext };

