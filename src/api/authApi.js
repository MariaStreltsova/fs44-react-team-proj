import axios from 'axios';
import { BASE_URL } from '/baseUrl';

const authApi = axios.create({
    baseURL: BASE_URL,
});

export const setToken = (token = '') => {
    if (token) {
        return (authApi.defaults.headers.authorization = `Bearer ${token}`);
    }
    authApi.defaults.headers.authorization = '';
};

export default authApi;