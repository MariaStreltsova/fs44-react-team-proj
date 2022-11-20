import authApi from './authApi';

export const getUserBalance = async () => {
  try {
    const result = await authApi.get('/user/balance');

    return result.data;
  } catch (error) {
    throw error;
  }
};
