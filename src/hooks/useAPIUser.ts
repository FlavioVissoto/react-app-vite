import axios from 'axios';

import { UserCreateRequest, UserLoginRequest } from '../types/request';
import { ErrorResponse } from '../types/response/error.response';
import { UserCreateResponse } from '../types/response/user/user-create.response';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + '/user',
});

export const useAPIUser = () => ({
  validadeToken: async (token: string) => {
    const response = await api.post('/validate', token);
    return response.data;
  },

  signin: async (request: UserLoginRequest): Promise<UserLoginRequest | null> => {
    try {
      const response = await api.post<UserLoginRequest>('/signin', { email: request.email, pass: request.pass });
      return response.data ?? null;
    } catch (error) {
      if (axios.isAxiosError<ErrorResponse, Record<string, unknown>>(error)) {
        throw error.response?.data;
      } else {
        throw error;
      }
    }
  },

  logout: async (): Promise<null> => {
    const response = await api.post('');
    return response.data;
  },

  create: async (request: UserCreateRequest): Promise<UserCreateResponse> => {
    try {
      const response = await api.post<UserCreateResponse>('/create', request);
      return response.data ?? null;
    } catch (error) {
      if (axios.isAxiosError<ErrorResponse, Record<string, unknown>>(error)) {
        throw error.response?.data;
      } else {
        throw error;
      }
    }
  },
});
