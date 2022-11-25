const getTransactions = state => state.wallet.transactions;
export const getCategoriesList = state => state.wallet.categoriesList;

const walletSelectors = {
  getTransactions,
  getCategoriesList,
};

export default walletSelectors;
