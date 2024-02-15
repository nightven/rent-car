import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>  
        <main>
        <Outlet />
        
        </main>
      <Footer />
    </>
  );
};

export default Layout;
