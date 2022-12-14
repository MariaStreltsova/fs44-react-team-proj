import authApi from './authApi';

export const signup = async data => {
  const { data: result } = await authApi.post('/api/auth/signup', data);

  return result;
};

export const login = async data => {
  const { data: result } = await authApi.post('/api/auth/login', data);

  return result;
};

export const logout = () => {
  return authApi.post('/api/auth/logout');
};

export const refreshUser = () => {
  return authApi.get('/api/auth/current');
};
