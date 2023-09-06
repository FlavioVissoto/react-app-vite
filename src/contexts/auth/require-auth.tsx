import { useContext } from 'react';

import LoginViewer from '../../pages/login/login';
import { AuthContext } from './auth.context';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <LoginViewer />;
  }
  return children;
};
