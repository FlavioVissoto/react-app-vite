import { createContext } from 'react';
import { UserLoginRequest } from '../../types/request/user/user-login.request';

export type AuthContextType = {
  user: UserLoginRequest | null;
  signin: (email: string, pass: string) => Promise<boolean>;
  signout: () => void;
};

export const AuthContext = createContext<AuthContextType>(null!);
