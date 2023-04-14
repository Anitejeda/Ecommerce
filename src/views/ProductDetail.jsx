import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/getProductById';
import { getAllProducts } from '../services/getAllProducts';
import ProductCard from '../components/common/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [counter, setCounter] = useState(1);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const loadProduct = async () => {
      const productData = await getProductById(id);
      const relatedProductsData = await getAllProducts({
        category: productData.categoryId,
      });
      setProduct(productData);
      setRelatedProducts(relatedProductsData);
    };

    loadProduct();
  }, []);

  return !product ? (
    <p>Loading product...</p>
  ) : (
    <div className="p-8">
      <section>
        <div className="flex justify-center relative h-[480px] m-4">
          {product.images.map((image) => (
            <img
              key={image.url}
              src={image.url}
              alt={product.title}
              className="h-[480px] max-w-[720px] absolute"
            />
          ))}
        </div>
        <div>
          <section>
            <h1 className="text-3xl text-black font-semibold">{product.title}</h1>
            <p className="mt-5">{product.description}</p>
          </section>
          <section className="flex flex-row gap-32 mt-5">
            <div>
              <h2 className="font-semibold text-gray-400">Price</h2>
              <p className="text-2xl text-black font-semibold">$ {product.price}</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-400">Quantity</h2>
              <div className="flex flex-row">
                <button
                  className="w-10 h-10 flex flex-row justify-center items-center border border-gray-600"
                  onClick={() => (counter == 0 ? null : setCounter(counter - 1))}
                >
                  -
                </button>
                <span className="text-3xl text-center border border-gray-600 w-10">
                  {counter}
                </span>
                <button
                  className="w-10 h-10 flex flex-row justify-center items-center border border-gray-600"
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </button>
              </div>
            </div>
          </section>
        </div>
        <button className="w-full mt-5 p-3 bg-orange-400">
          Add to Cart <i className="bx bx-cart-add"></i>
        </button>
      </section>
      <aside>
        <h2 className="text-xl font-semibold text-orange-400">Discover similar items</h2>
        <ul>
          {relatedProducts?.map((rProduct) => (
            <li key={rProduct.id}>
              <ProductCard product={rProduct} />
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default ProductDetail;
