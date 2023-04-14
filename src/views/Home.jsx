import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from '../components/common/ProductCard';
import { reset } from '../store/slices/user.slice';
import { Form, useLoaderData } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.user.isLogged);
  const { products, categories, category, title } = useLoaderData();

  const [categoryValue, setCategoryValue] = useState(category ?? '');
  const [nameValue, setNameValue] = useState(title ?? '');

  const handleNameValue = (e) => {
    setNameValue(e.target.value);
  };

  useEffect(() => {
    if (category) setCategoryValue(category);
  }, [category]);

  useEffect(() => {
    if (title) setNameValue(title);
  }, [title]);

  return (
    <div>
      <h1>Home</h1>
      {isLogged && <button onClick={() => dispatch(reset())}>LogOut</button>}

      <section>
        <Form>
          <div>
            <input
              type="search"
              name="title"
              placeholder="Type product name"
              value={nameValue}
              onChange={(e) => handleNameValue(e)}
              onClick={() => setNameValue('')}
            />
          </div>
          <legend>Category</legend>
          {categories?.map((category) => (
            <div key={category.id}>
              <label
                htmlFor={category.id + category.name}
                className={
                  categoryValue?.id == category.id ? 'text-orange-400 font-semibold' : ''
                }
              >
                {category.name}
              </label>
              <input
                type="radio"
                name="category"
                value={category.id}
                checked={categoryValue?.id == category.id}
                id={category.id + category.name}
                onChange={() => {
                  setCategoryValue(category);
                }}
                className="hidden"
              />
            </div>
          ))}
          <button
            type="submit"
            className="flex flex-row justify-center items-center p-2 bg-orange-400 hover:bg-orange-300 transition-all duration-200 rounded-xl"
          >
            Filter
          </button>
        </Form>
      </section>

      <section>
        <ul>
          {products.length > 0 ? (
            products.map((product) => <ProductCard key={product.id} product={product} />)
          ) : (
            <p>No product matches the search parameter "{title}"</p>
          )}
        </ul>
      </section>
    </div>
  );
};

export default Home;
