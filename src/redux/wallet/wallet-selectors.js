const getUserBalance = state => state.wallet.balance;
export const getCategoriesList = state => state.wallet.categoriesList;
export const getIsLoading = state => state.wallet.isLoading;
export const getStatData = state => state.wallet.statData;

const walletSelectors = {
  getUserBalance,
  getCategoriesList,
};

export default walletSelectors;
