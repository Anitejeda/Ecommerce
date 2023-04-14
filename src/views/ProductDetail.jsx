import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  useEffect(() => {}, [third]);

  return (
    <div className="p-8">
      <section>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <section>
            <h1 className="text-3xl text-black font-semibold">Product Name</h1>
            <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nulla
              tenetur iure soluta fugiat perspiciatis illo expedita accusamus vitae,
              dolores, repellat eos natus sint, autem quas labore incidunt culpa corporis!
            </p>
          </section>
          <section className="flex flex-row gap-32 mt-5">
            <div>
              <h2 className="font-semibold text-gray-400">Price</h2>
              <p className="text-2xl text-black font-semibold">$ 1000.00</p>
            </div>
            <div>
              <h2 className="font-semibold text-gray-400">Quantity</h2>
              <div className="flex flex-row">
                <button className="w-10 h-10 flex flex-row justify-center items-center border border-gray-600">
                  -
                </button>
                <span>1</span>
                <button className="w-10 h-10 flex flex-row justify-center items-center border border-gray-600">
                  +
                </button>
              </div>
            </div>
          </section>
        </div>
        <button>
          Add to Cart <i className="bx bx-cart-add"></i>
        </button>
      </section>
      <aside>
        <h2>Discover similar items</h2>
        <ul>Aqui ira la lista</ul>
      </aside>
    </div>
  );
};

export default ProductDetail;
