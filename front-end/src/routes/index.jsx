import React from "react";
import PathConstants from "./PathConstants";

const Home = React.lazy(() => import("../pages/Home"));
const Members = React.lazy(() => import("../pages/Members"));
const Shop = React.lazy(() => import("../pages/Store"));
const Blog = React.lazy(() => import("../pages/Blog"));
const Events = React.lazy(() => import("../pages/Events"));

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
    path: PathConstants.BLOG,
    element: <Blog />,
  },
  {
    path: PathConstants.EVENTS,
    element: <Events />,
  },
];

export default routes;
