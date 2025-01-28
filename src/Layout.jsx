import "./index.css";
import React from "react";
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="relative">

      <main className="relative z-10">{children}</main>
    </div>
  );
};

const Background = () => {
  return (
    <div className="absolute inset-0 bg-black -z-10"></div>
  );
};

export default Layout;
