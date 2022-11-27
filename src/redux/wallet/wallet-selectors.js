const getTransactions = state => state.wallet.transactions;
export const getCategories = state => state.wallet.transactions;
export const getIsLoading = state => state.wallet.isLoading;

const walletSelectors = {
  getTransactions,
  getCategories,
  getIsLoading,
};

export default walletSelectors;
