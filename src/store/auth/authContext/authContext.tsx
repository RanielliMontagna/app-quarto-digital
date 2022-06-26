import { createContext } from 'react';
import type { AuthSliceWithCallbacks } from '../authSlice.types';

const AuthContext = createContext<AuthSliceWithCallbacks>({} as AuthSliceWithCallbacks);

export default AuthContext;
