import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/error/NotFound";
import routes from "./routes";

function App() {

  const router = createBrowserRouter([{
    element: <Layout />,
    errorElement: <NotFound />,
    children: routes
  }])
  return (
      <RouterProvider router={router} />
  );
}

export default App;
