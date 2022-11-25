import authApi from './authApi';
import setToken from './authApi';

export const signup = async data => {
  const { data: result } = await authApi.post('/users/signup', data);
  setToken(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await authApi.post('/api/auth/login', data);
  setToken(result.token);
  return result;
};

export const logout = async data => {
  const { data: result } = await authApi.post('/api/auth/logout', data);
  setToken('');
  return result;
};

export const getCurrentUser = async token => {
  try {
    setToken(token);
    const result = await authApi.get('/api/auth/current');
    return result.data;
  } catch (error) {
    setToken('');
    throw error;
  }
};
