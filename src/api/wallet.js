import authApi from './authApi';

export const getTransactions = async () => {
  try {
    const result = await authApi.get('/api/transactions');
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const addTransaction = async () => {
  try {
    const result = await authApi.post('/api/transactions');
    return result.data;
  } catch (error) {
    throw error;
  }
};
