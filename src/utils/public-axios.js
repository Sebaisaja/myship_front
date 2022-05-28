import axios from 'axios';

const publicAxios = axios.create({
  baseURL: 'http://127.0.0.1:5000/api',
});

export default publicAxios;
