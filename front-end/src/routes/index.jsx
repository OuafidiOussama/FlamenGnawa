import React from "react";
import PathConstants from "./PathConstants";

const Home = React.lazy(() => import("../pages/Home"));
const Members = React.lazy(() => import("../pages/Members"));
const Shop = React.lazy(() => import("../pages/Store"));
const Blog = React.lazy(() => import("../pages/Blog"));
const Events = React.lazy(() => import("../pages/Events"));
const Login = React.lazy(() => import("../pages/Login"));
const Register = React.lazy(() => import("../pages/Register"));
const ProductDetails = React.lazy(() => import("../pages/ProductDetails"));
const ArticleDetails = React.lazy(() => import("../pages/ArticleDetails"));

const routes = [
  {
    path: PathConstants.HOME,
    element: <Home />,
  },
  {
    path: PathConstants.MEMBERS,
    element: <Members />,
  },
  {
    path: PathConstants.SHOP,
    element: <Shop />,
  },
  {
    path: `${PathConstants.SHOP}/:productId`,
    element: <ProductDetails />,
  },
  {
    path: PathConstants.BLOG,
    element: <Blog />,
  },
  {
    path: `${PathConstants.BLOG}/:articleId`,
    element: <ArticleDetails />,
  },
  {
    path: PathConstants.EVENTS,
    element: <Events />,
  },
  {
    path: PathConstants.LOGIN,
    element: <Login />,
  },
  {
    path: PathConstants.REGISTER,
    element: <Register />,
  },
];

export default routes;
