import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layouts/Main';
import Orders from './components/Orders/Orders';
import Invetory from './components/Inventory/Invetory';
import Shop from './components/Shop/Shop';
import Home from './components/Home/Home';
import { ProductsAndCartLoader } from './loaders/ProductsAndCartLoader';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Shipping from './components/Shipping/Shipping';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/home',
          element: <Home />
        },
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/orders',
          loader: ProductsAndCartLoader,
          element: <Orders />
        },
        {
          path: '/shipping',
          element: <Shipping />
        },
        {
          path: '/inventory',
          element: <Invetory />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <Signup />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
