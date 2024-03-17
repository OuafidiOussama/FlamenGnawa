import React from "react";
import PathConstants from "./PathConstants";

const Home = React.lazy(() => import("../pages/Home"));
const Blog = React.lazy(() => import("../pages/Blog"));
const Store = React.lazy(() => import("../pages/Store"));

const routes = [
  {
    path: PathConstants.HOME,
    element: <Home />,
  },
  {
    path: PathConstants.BLOG,
    element: <Blog />,
  },
  {
    path: PathConstants.STORE,
    element: <Store />,
  },
];

export default routes;
