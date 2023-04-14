import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://e-commerce-api.academlo.tech/api/v1/', 
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  },
});
