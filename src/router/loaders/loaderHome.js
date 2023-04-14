import { getAllProducts } from '../../services/getAllProducts';
import { getCategories } from '../../services/getCategories';

export const loaderHome = async ({ request }) => {
  const categories = await getCategories();
  const url = new URL(request.url);
  const category = url.searchParams.get('category');
  let products;

  if (category) {
    products = await getAllProducts({ category });
  } else {
    products = await getAllProducts();
  }
  console.log(category);
  return { products, categories };
};
