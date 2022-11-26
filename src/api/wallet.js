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

export const getStatisticData = async ({ year, month }) => {
  try {
    const result = await authApi.get(`transactions/statistic/${year}/${month}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};
