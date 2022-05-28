import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'http://127.0.0.1:5000/api',
});

export const authorizationProvider = (store) => {
  authAxios.interceptors.request.use((config) => {
    const token = store.getState().userLogin.userInfo.token;
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });
};

export default authAxios;
