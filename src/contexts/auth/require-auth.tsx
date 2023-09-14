import { useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import { AuthContext } from './auth.context';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(auth);

  if (!auth.user) {
    if (window.location.pathname != '/login') {
      return <Navigate to={'/login?redirect=' + window.location.pathname + window.location.search}></Navigate>;
    } else {
      return <Navigate to="/login"></Navigate>;
    }
  }
  return children;
};
