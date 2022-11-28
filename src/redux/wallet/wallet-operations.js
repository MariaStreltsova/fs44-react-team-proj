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
  async (transaction, thunkAPI) => {
    try {
      const { data: response } = await api.addTransaction(transaction);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchCategories = createAsyncThunk(
  'wallet/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data: response } = await api.getCategories();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const operations = {
  fetchTransactions,
  addTransaction,
  fetchCategories,
};

export default operations;
