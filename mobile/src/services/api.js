import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333', // utilizar o ip do emulador do android
});

export default api;
