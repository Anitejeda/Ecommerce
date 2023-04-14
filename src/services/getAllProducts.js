import { axiosInstance } from "../api/axiosInstance";

export const getAllProducts = async () => {
    try {
        const res = await axiosInstance.get('/products'); 
        return res.data.data.products;
    }   catch (error) {
        console.error(error);
    };
};