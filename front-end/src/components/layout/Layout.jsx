import React, { Suspense } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Loading from "../partials/Loading";
import { Outlet, useLocation } from "react-router-dom";

export default function Layout() {
  const location = useLocation()
  const hideComponentsRoutes = ["/login","/register"] 
  const shouldHideComponent = hideComponentsRoutes.includes(location.pathname.toLowerCase())
  return (
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
