import * as api from '../../api/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { token } from '../../api/authApi';
import { toast } from 'react-toastify';
import { t } from 'i18next';

const register = createAsyncThunk('auth/signup', async data => {
  try {
    const result = await api.signup(data);
    toast.success(t('messages.signupSuccess'));
    token.set(result.token);
    return result;
  } catch (error) {
    toast.error(`Sorry, Register failed. Try again.`);
  }
});

const logIn = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      token.set(result.token);
      return result;
    } catch (error) {
      if (error.response.status === 401) {
        return rejectWithValue(toast.error(t('errors.loginError')));
      }
    }
  }
);

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await api.logout();
    token.unset();
  } catch (error) {}
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
      return data;
    } catch (error) {
      toast.error('Sorry, your token is dead or time is out ');
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
