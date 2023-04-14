import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/common/Layout';
import Home from '../views/Home';
import Login from '../views/Login';
import Purchases from '../views/Purchases';
import ProductDetail from '../views/ProductDetail';
import NotFound from '../views/NotFound';
import ProtectedRouter from '../components/common/ProtectedRouter';
import { loaderHome } from './loaders/loaderHome';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <ProtectedRouter>
            <Home />
          </ProtectedRouter>
        ),
        loader: loaderHome,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/purchases',
        element: (
          <ProtectedRouter>
            <Purchases />
          </ProtectedRouter>
        ),
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);
