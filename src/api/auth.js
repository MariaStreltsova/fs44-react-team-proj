import authApi from './authApi';
// import token from './authApi';

export const signup = async data => {
  const { data: result } = await authApi.post('/users/signup', data);
  // token.set(result.token);
  return result;
};

export const login = async data => {
  const { data: result } = await authApi.post('/api/auth/login', data);
  // token.set(result.token);
  return result;
};

export const logout = async data => {
  const { data: result } = await authApi.post('/api/auth/logout', data);
  // token.set('');
  return result;
};

export const refreshUser = () => {
  return authApi.get('/api/auth/current');
};

export const getCurrentUser = async newToken => {
  try {
    // token.set(newToken);
    const result = await authApi.get('/api/auth/current');
    return result.data;
  } catch (error) {
    // token.set('');
    throw error;
  }
};
