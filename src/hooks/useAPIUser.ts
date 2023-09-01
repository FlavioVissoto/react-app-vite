import axios from 'axios';

import { User } from '../types/user';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + '/user',
});

export const useAPIUser = () => ({
  validadeToken: async (token: string) => {
    const response = await api.post('/validate', token);
    return response.data;
  },

  signin: async (email: string, pass: string): Promise<User | null> => {
    console.log(import.meta.env);

    const response = await api.post<User>('/signin', { email, pass });
    return response.data ?? null;
  },

  logout: async (): Promise<null> => {
    const response = await api.post('');
    return response.data;
  },
});
