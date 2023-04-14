import axios from 'axios';
import cors from 'cors';

export const axiosInstance = axios.create({
  baseURL: 'http://e-commerce-api.academlo.tech/api/v1/',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});
