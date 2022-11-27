const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUser = state => state.auth.user;

// const getBalance = state => state.auth.user.balance;

const getIsRefreshingUser = state => state.auth.isRefreshingUser;

const authSelectors = {
  getIsLoggedIn,
  getUser,
  getIsRefreshingUser,
  // getBalance,
};

export default authSelectors;
