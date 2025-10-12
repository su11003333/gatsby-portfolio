import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="page">
      <Navbar />
      <main className="page-main">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
