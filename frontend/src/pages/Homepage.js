import React, { useContext } from "react";
import BottomController from "../components/editor/BottomController";
import Canvas from "../components/editor/Canvas";
import SideController from "../components/editor/SideController";
import SideNav from "../components/sidenav/SideNav";
import { contextProvider } from "../Context";

const Homepage = () => {
  return (
    <div className="home">
      <SideNav />
      <Canvas />
      <BottomController />
      <SideController />
    </div>
  );
};

export default Homepage;
