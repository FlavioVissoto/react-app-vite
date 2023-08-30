import axios from 'axios';

const api = axios.create({
  baseURL: '',
});

export const useAPI = () => ({
  validadeToken: async (token: string) => {
    const response = await api.post('/validate', token);
    return response.data;
  },

  signin: async (email: string, pass: string) => {
    const response = await api.post('/signin', { email, pass });
    return response.data;
  },

  logout: async () => {
    const response = await api.post('');
    return response.data;
  },
});
