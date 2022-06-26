import { createContext } from 'react';

import type { AppSlice } from '../appSlice.types';

const AppContext = createContext<AppSlice>({} as AppSlice);

export default AppContext;
