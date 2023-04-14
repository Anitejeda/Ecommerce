import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleAddProductBtn = (e) => {
    e.stopPropagation();
    console.log('propagation');
  };

  return (
    <article
      key={product.id}
      onClick={() => navigate(`/products/${product.id}`)}
      className="cursor-pointer"
    >
      <div className="max-w-[250px]">
        <img src={product.productImgs[0]} alt={product.titlle} />
      </div>
      <div>
        <h2 className="text-semibold text-xl">{product.tittle}</h2>
        <div>
          <h3>Price</h3>
          <p>$ {product.price} </p>
        </div>
        <button
          onClick={handleAddProductBtn}
          className="flex flex-row justify-center items-center text-3xl p-2 bg-orange-300"
        >
          <i className="bx bx-cart-add"></i>
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
