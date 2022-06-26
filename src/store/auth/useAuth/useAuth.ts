import { useContext } from 'react';
import AuthContext from '../authContext/authContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth() deve estar dentro de um <AuthProvider />');
  }

  return context;
};

export default useAuth;
