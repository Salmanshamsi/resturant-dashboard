import React, { useState } from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import Sidebar from "../../components/Sidebar";
import useMediaQuery from "../../hooks/useMediaQuery";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const Layout = () => {
  return (
    <div className={`flex`} width={"100%"} height={"100%"}>
      <Sidebar />
      <div className="grow">
        <Navbar />
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
