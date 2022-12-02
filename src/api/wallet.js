import authApi from './authApi';

export const getTransactions = async () => {
  try {
    const result = await authApi.get('/api/transactions');
    return result.data;
  } catch (error) {
    throw error;
  }
};

export const addTransaction = async transaction => {
  try {
    const { data: response } = await authApi.post(
      '/api/transactions',
      transaction
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCategories = async () => {
  try {
    const { data: response } = await authApi.get(
      '/api/transactions/categories'
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getStatisticYearMonth = async (year, month) => {
  try {
    const result = await authApi.get(
      `/api/transactions/statistic/${year}/${month + 1}`
    );
    return result.data;
  } catch (error) {
    throw error;
  }
};
export const getStatisticYear = async year => {
  try {
    const result = await authApi.get(`/api/transactions/statistic/${year}`);
    return result.data;
  } catch (error) {
    throw error;
  }
};
