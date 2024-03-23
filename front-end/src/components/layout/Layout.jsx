import React, { Suspense } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Loading from "../partials/Loading";
import { Outlet, useLocation } from "react-router-dom";

import AdminHeader from '../partials/admin/AdminHeader'

export default function Layout() {
  const location = useLocation();
  const hideComponentsRoutes = ["/login", "/register"];
  const adminRoutes = ["/dashboard", '/blog_table', '/members_table', '/shop_table', '/events_table', '/categories_table'];
  const isAdmin = adminRoutes.includes(location.pathname.toLowerCase());
  const shouldHideComponent = hideComponentsRoutes.includes(
    location.pathname.toLowerCase()
  );
  return isAdmin ? (
    <div className=" text-black flex">
      <AdminHeader />
      <main className="w-full min-h-screen">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  ) : (
    <div className="bg-dark-purple text-white">
      {!shouldHideComponent && <Header />}
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      {!shouldHideComponent && <Footer />}
    </div>
  );
}
