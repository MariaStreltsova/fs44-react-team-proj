import { createSlice } from '@reduxjs/toolkit';
import walletOperations from './wallet-operations';

const initialState = {
  transactions: null,
  isLoading: false,
  error: null,
  statData: null,
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

    // получение статистики
    [walletOperations.getStatisticData.pending](state) {
      state.isLoading = true;
    },
    [walletOperations.getStatisticData.fulfilled](state, action) {
      state.statData = action.payload;
      state.isLoading = false;
    },
    [walletOperations.getStatisticData.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default walletSlice.reducer;
