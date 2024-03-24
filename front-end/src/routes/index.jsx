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
const Dashboard = React.lazy(() => import("../pages/admin/Dashboard"));
const BlogTable = React.lazy(() => import("../pages/admin/blog/BlogTable"));
const EventsTable = React.lazy(() => import("../pages/admin/events/EventsTable"));
const MembersTable = React.lazy(() => import("../pages/admin/members/MembersTable"));
const ShopTable = React.lazy(() => import("../pages/admin/shop/ShopTable"));
const CategoriesTable = React.lazy(() => import("../pages/admin/categories/CategoriesTable"));
const AdminRoute = React.lazy(() => import("../hocs/AdminRoutes"));

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
  {
    path: PathConstants.DASHBOARD,
    element: <AdminRoute children={<Dashboard />} />,
  },
  {
    path: PathConstants.BLOG_TABLE,
    element: <AdminRoute children={<BlogTable />} />,
  },
  {
    path: PathConstants.EVENTS_TABLE,
    element: <AdminRoute children={<EventsTable />} />,
  },
  {
    path: PathConstants.MEMBERS_TABLE,
    element: <AdminRoute children={<MembersTable />} />,
  },
  {
    path: PathConstants.SHOP_TABLE,
    element: <AdminRoute children={<ShopTable />} />,
  },
  {
    path: PathConstants.CATEGORIES_TABLE,
    element: <AdminRoute children={<CategoriesTable />} />,
  },
];

export default routes;
