import React from "react";
import PathConstants from "./PathConstants";

const Home = React.lazy(() => import("../pages/home/Home"));
const Members = React.lazy(() => import("../pages/members/Members"));
const Shop = React.lazy(() => import("../pages/shop/Store"));
const Blog = React.lazy(() => import("../pages/blogs/Blog"));
const Events = React.lazy(() => import("../pages/events/Events"));
const Login = React.lazy(() => import("../pages/auth/Login"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const ProductDetails = React.lazy(() => import("../pages/shop/ProductDetails"));
const ArticleDetails = React.lazy(() => import("../pages/blogs/ArticleDetails"));

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
