import { useState } from 'react';

import { useAPIUser } from '../../hooks/useAPIUser';
import { User } from '../../types/user';
import { AuthContext } from './auth.context';

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useAPIUser();

  const signin = async (email: string, pass: string) => {
    const data = await api.signin(email, pass);
    if (data) {
      setUser(data);
      return true;
    } else {
      return false;
    }
  };

  const signout = async () => {
    await api.logout();
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, signin, signout }}>{children}</AuthContext.Provider>;
};
