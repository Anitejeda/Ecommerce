import axios from 'axios';
import cors from 'cors';

export const axiosInstance = axios.create({
  baseURL: 'https://e-commerce-api-v2.academlo.tech/api/v1',
});
