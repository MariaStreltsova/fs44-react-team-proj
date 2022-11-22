import { createSlice } from '@reduxjs/toolkit';
import walletOperations from './wallet-operations';

const initialState = {
  balance: null,
  isLoading: false,
  error: null,
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
  },
});

export default walletSlice.reducer;
