import React, { Suspense } from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import Loading from "../partials/Loading";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-dark-purple text-white">
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
