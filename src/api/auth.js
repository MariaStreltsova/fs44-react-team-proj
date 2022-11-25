import authApi from './authApi';
// import token from './authApi';

export const signup = async data => {
  const { data: result } = await authApi.post('/api/users/signup', data);
  return result;
};

export const login = async data => {
  const { data: result } = await authApi.post('/api/auth/login', data);
  return result;
};

export const logout = async data => {
  const { data: result } = await authApi.post('/api/auth/logout', data);
  return result;
};

export const refreshUser = () => {
  return authApi.get('/api/auth/current');
};

// export const refreshUser = async newToken => {

//     const result = await authApi.get('/api/auth/current');
//     return result.data;
