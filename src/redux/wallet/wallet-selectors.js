const getTransactions = state => state.wallet.transactions;
export const getCategoriesList = state => state.wallet.categoriesList;
export const getIsLoading = state => state.wallet.isLoading;

const walletSelectors = {
  getTransactions,
  getCategoriesList,
};

export default walletSelectors;
