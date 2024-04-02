import React from "react";
import PathConstants from "./PathConstants";

const Home = React.lazy(() => import("../pages/home/Home"));
const Biography = React.lazy(() => import("../pages/Biography"));
const Members = React.lazy(() => import("../pages/members/Members"));
const Shop = React.lazy(() => import("../pages/shop/Store"));
const Cart = React.lazy(() => import("../pages/shop/Cart"));
const Blog = React.lazy(() => import("../pages/blogs/Blog"));
const Events = React.lazy(() => import("../pages/events/Events"));
const Login = React.lazy(() => import("../pages/auth/Login"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const ProductDetails = React.lazy(() => import("../pages/shop/ProductDetails"));
const ArticleDetails = React.lazy(() => import("../pages/blogs/ArticleDetails"));
const Dashboard = React.lazy(() => import("../pages/admin/Dashboard"));
const BlogTable = React.lazy(() => import("../pages/admin/blog/BlogTable"));
const BlogForm = React.lazy(() => import("../pages/admin/blog/BlogForm"));
const EventsTable = React.lazy(() => import("../pages/admin/events/EventsTable"));
const EventForm = React.lazy(() => import("../pages/admin/events/EventForm"));
const MembersTable = React.lazy(() => import("../pages/admin/members/MembersTable"));
const MemberForm = React.lazy(() => import("../pages/admin/members/MemberForm"));
const ShopTable = React.lazy(() => import("../pages/admin/shop/ShopTable"));
const ShopForm = React.lazy(() => import("../pages/admin/shop/ShopForm"));
const CategoriesTable = React.lazy(() => import("../pages/admin/categories/CategoriesTable"));
const CategoriesForm = React.lazy(() => import("../pages/admin/categories/CategoriesForm"));
const AdminRoute = React.lazy(() => import("../hocs/AdminRoutes"));

const routes = [
  {
    path: PathConstants.HOME,
    element: <Home />,
  },
  {
    path: PathConstants.BIOGRAPHY,
    element: <Biography />,
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
    path: PathConstants.CART,
    element: <Cart />,
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
    path: PathConstants.BLOG_FORM,
    element: <AdminRoute children={<BlogForm />} />,
  },
  {
    path: PathConstants.EVENTS_TABLE,
    element: <AdminRoute children={<EventsTable />} />,
  },
  {
    path: PathConstants.EVENTS_FORM,
    element: <AdminRoute children={<EventForm />} />,
  },
  {
    path: PathConstants.MEMBERS_TABLE,
    element: <AdminRoute children={<MembersTable />} />,
  },
  {
    path: PathConstants.MEMBERS_FORM,
    element: <AdminRoute children={<MemberForm />} />,
  },
  {
    path: PathConstants.SHOP_TABLE,
    element: <AdminRoute children={<ShopTable />} />,
  },
  {
    path: PathConstants.SHOP_FORM,
    element: <AdminRoute children={<ShopForm />} />,
  },
  {
    path: PathConstants.CATEGORIES_TABLE,
    element: <AdminRoute children={<CategoriesTable />} />,
  },
  {
    path: PathConstants.CATEGORIES_FORM,
    element: <AdminRoute children={<CategoriesForm />} />,
  },
];

export default routes;
