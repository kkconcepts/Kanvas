// services/axiosService.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.paperform.co/v1',
  headers: {
    'Authorization': `Bearer PAPERFORM_API_KEY`,
    'Content-Type': 'application/json',
  },
});

export default api;
