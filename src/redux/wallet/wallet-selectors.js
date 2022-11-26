const getTransactions = state => state.wallet.transactions;
export const getCategoriesList = state => state.wallet.categoriesList;
export const getIsLoading = state => state.wallet.isLoading;
export const getStatData = state => state.wallet.statData;

const walletSelectors = {
  getTransactions,
  getCategoriesList,
};

export default walletSelectors;
