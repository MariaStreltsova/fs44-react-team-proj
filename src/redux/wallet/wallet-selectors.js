const getUserBalance = state => state.wallet.balance;
export const getCategoriesList = state => state.wallet.categoriesList;

const walletSelectors = {
  getUserBalance,
  getCategoriesList,
};

export default walletSelectors;
