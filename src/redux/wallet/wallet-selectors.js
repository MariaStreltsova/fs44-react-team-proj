const getUserBalance = state => state.wallet.balance;

const walletSelectors = {
  getUserBalance,
};

export default walletSelectors;
