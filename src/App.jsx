import Home from "./components/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ProductDetails from "./components/ProductDetails";
import CheckOut from './components/CheckOut'
import { Provider } from "react-redux";
import store from "./redux/store";
import CartPage from "./components/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/ProductDetails",

    element: <ProductDetails />,
  },
  {
    path: "/checkout",

    element: <CheckOut />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
