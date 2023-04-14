import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleAddProductBtn = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log('propagation');
  };

  return (
    <Link to={`/products/${product.id}`}>
      <article key={product.id} className="cursor-pointer">
        <div className="max-w-[250px]">
          <img src={product.productImgs[0]} alt={product.title} />
        </div>
        <div>
          <h2 className="text-semibold text-xl">{product.title}</h2>
          <div>
            <h3>Price</h3>
            <p>$ {product.price} </p>
          </div>
          <button
            onClick={handleAddProductBtn}
            className="flex flex-row justify-center items-center text-3xl p-2 bg-orange-400 hover:bg-orange-300 rounded-lg"
          >
            <i className="bx bx-cart-add"></i>
          </button>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
