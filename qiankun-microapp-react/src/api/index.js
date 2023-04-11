import axios from 'axios';
const baseURL = window.__POWERED_BY_QIANKUN__ ? 'http://localhost:3000/api' : '/api';
const instance = axios.create({
  baseURL,
  // timeout: 60000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export default instance;