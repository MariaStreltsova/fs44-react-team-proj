import { createSlice } from '@reduxjs/toolkit';
import walletOperations from './wallet-operations';

const initialState = {
  transactions: null,
  isLoading: false,
  error: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  extraReducers: {
    [walletOperations.fetchTransactions.pending](state) {
      state.isLoading = true;
    },

    [walletOperations.fetchTransactions.fulfilled](state, action) {
      state.transactions = action.payload;
    },

    [walletOperations.fetchTransactions.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default walletSlice.reducer;
