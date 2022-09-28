import React, { useContext } from "react";
import SideNav from "../components/sidenav/SideNav";
import { contextProvider } from "../Context";

const Homepage = () => {
  return <div className="home">
    <SideNav />
  </div>;
};

export default Homepage;
