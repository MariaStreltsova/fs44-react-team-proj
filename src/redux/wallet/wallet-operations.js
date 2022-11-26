// import * as api from '../../api/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/wallet';

const fetchTransactions = createAsyncThunk(
  'wallet/getTransactions',
  async (_, thunkAPI) => {
    try {
      const result = await api.getTransactions();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'wallet/addTransaction',
  async (transactionBody, thunkAPI) => {
    try {
      const result = await api.addTransaction(transactionBody);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const operations = {
  fetchTransactions,
  addTransaction,
};
export default operations;
