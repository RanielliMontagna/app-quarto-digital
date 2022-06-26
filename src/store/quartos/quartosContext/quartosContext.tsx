import { createContext } from 'react';
import type { QuartosSliceWithCallbacks } from '../quartosSlice.types';

const QuartosContext = createContext<QuartosSliceWithCallbacks>({} as QuartosSliceWithCallbacks);

export default QuartosContext;
