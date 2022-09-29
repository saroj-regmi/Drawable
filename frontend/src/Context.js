import React, { createContext, useRef, useState } from "react";

export const contextProvider = createContext();

const Context = ({ children }) => {
  // active players data
  const [activePlayers, setActivePlayers] = useState([
    {
      id: "#231123",
      name: "Nikhelesh yadav",
      logo: "../../imgs/TestImg.jpg",
    },
    {
      id: "#224542",
      name: "Survace verma",
      logo: "../../imgs/TestImg.jpg",
    },
    {
      id: "#2311352",
      name: "Sanchita sharma",
      logo: "../../imgs/TestImg.jpg",
    },
    {
      id: "#2312435",
      name: "Krishna marashani",
      logo: "../../imgs/TestImg.jpg",
    },
    {
      id: "#123324",
      name: "saroj regmi",
      logo: "../../imgs/TestImg.jpg",
    },
  ]);

  // current user details
  const [currentUser, setCurrentUser] = useState({
    id: "#123324",
    name: "saroj regmi",
    logo: "../../imgs/TestImg.jpg",
  });

  // canvas related states
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState();

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const startDrawing = (e) => {
    const { clientX, clientY } = e;
    console.log(clientY, clientY);
    contextRef.current.beginPath();
    contextRef.current.moveTo(clientX, clientY);
    setIsDrawing(true);
  };
  const endDrawing = () => {
    console.log("ending");
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { clientX, clientY } = e;
    contextRef.current.lineTo(clientX, clientY);
    contextRef.current.stroke();
  };

  // const clearCanvas = () => {
  //   const canvas = canvasRef.current;
  //   const context = canvas.getContext("2d");

  //   context.fillStyle = "white";
  //   context.fillRect(0, 0, canvas.width, canvas.height);
  // };
  return (
    <contextProvider.Provider
      value={{
        player: {
          active: [activePlayers, setActivePlayers],
        },
        users: {
          loggedIn: [currentUser, setCurrentUser],
        },
        canvasContext: {
          canvasRef,
          contextRef,
          prepareCanvas,
          // clearCanvas,
          startDrawing,
          endDrawing,
          draw,
        },
      }}
    >
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
