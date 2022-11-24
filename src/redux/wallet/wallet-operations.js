// import * as api from '../../api/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

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
      // const result = await api.post(
      //   `${BACK_END}/api/transactions`,
      //   transactionBody
      // );
      // return result.transaction;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getTransactionsList = createAsyncThunk(
  "wallet/getTransactionsList",
  async (_, thunkAPI) => {
    try {
      // const result = await api.get(
      //   `${BACK_END}/api/transactions`
      // );
      // return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);


const operations = {
  fetchUserBalance,
  addTransaction,
};
export default operations;
