import React from 'react';
import { Outlet } from 'react-router-dom';

const Layaout = () => {
  return (
    <>
      <header>-</header>
      <main>
        <Outlet />
      </main>
      <footer>-</footer>
    </>
  );
};

export default Layaout;
