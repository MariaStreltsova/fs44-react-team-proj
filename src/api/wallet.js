import authApi from './authApi';

export const getUserBalance = async () => {
  try {
    const result = await authApi.get('/user/balance');

    return result.data;
  } catch (error) {
    throw error;
  }
};

export const addTransaction = async () => {
  try {
    const result = await authApi.post('/transactions');
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const getTransactionsList = async () => {
  try {
    const result = await authApi.get('/transactions');
    return result.data;
  } catch (error) {
    throw error;
  }
};
