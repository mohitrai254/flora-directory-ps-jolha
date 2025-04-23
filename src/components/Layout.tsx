// src/components/Layout.tsx
import React from "react";
import AnimatedBackground from "./AnimatedBackground";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
