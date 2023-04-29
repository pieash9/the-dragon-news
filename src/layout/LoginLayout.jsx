import React from "react";
import NavigationBarr from "../pages/Shared/NavigationBar/NavigationBarr";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <>
      <NavigationBarr />
      <Outlet />
    </>
  );
};

export default LoginLayout;
