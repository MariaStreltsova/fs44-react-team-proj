import * as api from '../../api/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../api/authApi';

const register = createAsyncThunk('auth/signup', async data => {
  try {
    const result = await api.signup(data);
    token.set(result.token);
    return result;
  } catch (error) {
    console.log.error(`Sorry, Register failed. Try again.`);
  }
});

const logIn = createAsyncThunk('auth/login', async data => {
  try {
    const result = await api.login(data);
    token.set(result.token);
    return result;
  } catch (error) {
    console.log.error(
      `Sorry, login failed. Check email and password. Try again.`
    );
  }
});

const logOut = createAsyncThunk('auth/logout', async data => {
  try {
    const result = await api.logout(data);
    return result;
  } catch (error) {
    console.log.error(`Sorry, logout failed. Try again.`);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);

    try {
      const { data } = await api.refreshUser();
      console.log(data);
      return data;
    } catch (error) {
      console.log.error('Sorry, your token is dead or time is out ');
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
