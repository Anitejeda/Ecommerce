import { getAllProducts } from "../../services/getAllProducts";
import { getCategories } from '../../services/getCategories';

export const loaderHome = async ({ a }) => {
    const products = await getAllProducts();
    const categories = await getCategories();

    return { products, categories };
};