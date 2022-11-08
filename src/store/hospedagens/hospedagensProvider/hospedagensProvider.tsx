import React from 'react';
import { useSelector } from 'hooks';

import HospedagensContext from '../hospedagensContext/hospedagensContext';

const HospedagensProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const hospedagens = useSelector(({ Hospedagens }) => Hospedagens);

  return <HospedagensContext.Provider value={{ ...hospedagens }}>{children}</HospedagensContext.Provider>;
};

export default HospedagensProvider;
