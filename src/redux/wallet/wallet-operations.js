import * as api from '../../api/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchUserBalance = createAsyncThunk(
  'wallet/getUserBalance',
  async (_, thunkAPI) => {
    try {
      const result = await api.getUserBalance();

      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const operations = {
  fetchUserBalance,
};
export default operations;
