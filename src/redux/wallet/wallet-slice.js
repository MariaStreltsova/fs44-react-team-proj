import { createSlice } from '@reduxjs/toolkit';
import walletOperations from './wallet-operations';

const initialState = {
  balance: null,
  isLoading: false,
  error: null,
  statData: null,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  extraReducers: {
    [walletOperations.fetchUserBalance.pending](state) {
      state.isLoading = true;
    },

    [walletOperations.fetchUserBalance.fulfilled](state, action) {
      state.balance = action.payload;
    },

    [walletOperations.fetchUserBalance.rejected](state, action) {
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
