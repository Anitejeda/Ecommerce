import { getAllProducts } from '../../services/getAllProducts';
import { getCategories } from '../../services/getCategories';

export const loaderHome = async ({ request }) => {
  const categories = await getCategories();
  const url = new URL(request.url);
  const categoryId = url.searchParams.get('category');
  const title = url.searchParams.get('title');
  let products;

  if (categoryId || title) {
    products = await getAllProducts({
      category: categoryId,
      title,
    });
  } else {
    products = await getAllProducts();
  }

  return {
    products,
    categories,
    category: categories.find((x) => x.id.toString() == categoryId),
    title,
  };
};
