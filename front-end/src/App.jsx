import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import Layout from "./components/layout/Layout";
import NotFound from "./pages/error/NotFound";
import routes from "./routes";
import store from "./redux/store";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const router = createBrowserRouter([{
    element: <Layout />,
    errorElement: <NotFound />,
    children: routes
  }])
  return (
      <Provider store={store}>
        <ToastContainer />
        <RouterProvider router={router} />
      </Provider>
  );
}

export default App;
