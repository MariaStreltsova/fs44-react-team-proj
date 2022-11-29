const getTransactions = state => state.wallet.transactions;
const getCategories = state => state.wallet.categories;
export const getIsLoading = state => state.wallet.isLoading;

const walletSelectors = {
  getTransactions,
  getCategories,
  getIsLoading,
};

export default walletSelectors;
