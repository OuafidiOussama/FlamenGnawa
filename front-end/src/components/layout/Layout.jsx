import React, { Suspense } from "react";
import Header from "../partials/Header";
import Loading from "../partials/Loading";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
