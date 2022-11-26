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

const addTransaction = createAsyncThunk(
  'wallet/addTransaction',

export const addTransaction = createAsyncThunk(
  "wallet/addTransaction",
  async (transactionBody, thunkAPI) => {
    try {
      const result = await api.addTransaction(transactionBody);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getTransactionsList = createAsyncThunk(
  'wallet/getTransactionsList',
  async (_, thunkAPI) => {
    try {
      const result = await api.getTransactionsList();
      const result = await api.addTransaction(transactionBody);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getStatisticData = createAsyncThunk(
  'wallet/getStatisticData',
  async (statBody, thunkAPI) => {
    try {
      const result = await api.getStatisticData(statBody);
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const operations = {
  fetchTransactions,
  addTransaction,
  getTransactionsList,
  getStatisticData,
};

export default operations;
