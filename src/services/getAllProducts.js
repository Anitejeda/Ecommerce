import { axiosInstance } from '../api/axiosInstance';

export const getAllProducts = async (params) => {
  try {
    const res = await axiosInstance.get('/products', {
      params: {
        title: params?.title,
        categoryId: params?.category,
      },
    });
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
