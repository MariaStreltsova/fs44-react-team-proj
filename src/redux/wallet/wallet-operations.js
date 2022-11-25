// import * as api from '../../api/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../api/wallet';

const fetchUserBalance = createAsyncThunk(
  'wallet/getUserBalance',
  async (_, thunkAPI) => {
    try {
      // const result = await api.getUserBalance();
      // return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addTransaction = createAsyncThunk(
  "wallet/addTransaction",
  async (transactionBody, thunkAPI) => {
    try {
      const result = await api.addTransaction(
        transactionBody
      );
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getTransactionsList = createAsyncThunk(
  "wallet/getTransactionsList",
  async (_, thunkAPI) => {
    try {
      const result = await api.getTransactionsList();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const operations = {
  fetchUserBalance,
  addTransaction,
  getTransactionsList,
};
export default operations;
