import { axiosInstance } from '../api/axiosInstance';

export const getProductById = async (id) => {
  try {
    const res = await axiosInstance.get(`products/${id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
