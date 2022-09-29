import React, { createContext, useEffect, useRef, useState } from "react";

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
  const colors = [
    "#df5c5c",
    "#5cdf71",
    "#5cdfd7",
    "#5c81df",
    "#dcdf5c",
    "#383838",
  ];

  const [currentColor, setCurrentColor] = useState("#383838");

  // drawing is the ultimate drawing container that contains each and every line

  const [drawing, setDrawing] = useState([]);
 
  // data model for points
  // const points = [[{
  //   x:,
  //   y:,
  //   color:,

  // }],];
  // a series of individual points in between one mouse click is called one stroke
  const [oneStroke, setOneStroke] = useState([]);

  // this will hold the removed lines.
  const [removedLines, setRemovedLines] = useState([]);

  const updateStroke = (clientX, clientY, currentColor) => {
    const point = {
      x: clientX,
      y: clientY,
      c: currentColor,
    };
    setOneStroke([...oneStroke, point]);
  };

  const prepareCanvas = () => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 2;
    canvas.height = window.innerHeight * 2;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const context = canvas.getContext("2d");
    context.scale(2, 2);
    context.lineCap = "round";
    context.strokeStyle = currentColor;
    context.lineWidth = 5;
    contextRef.current = context;
  };

  const startDrawing = (e) => {
    const { clientX, clientY } = e;
    contextRef.current.beginPath();
    contextRef.current.moveTo(clientX, clientY);
    setIsDrawing(true);

    updateStroke(clientX, clientY, currentColor);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { clientX, clientY } = e;
    contextRef.current.lineTo(clientX, clientY);
    contextRef.current.stroke();

    updateStroke(clientX, clientY, currentColor);
  };

  const endDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
    setDrawing([...drawing, oneStroke]);
    setOneStroke([]);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
  };

  const repaintCanvas = (data) => {
    clearCanvas();
    data.forEach((line, index) => {
      contextRef.current.beginPath();
      contextRef.current.moveTo(line[0].x, line[0].y);

      line.forEach((point, number) => {
        if (number === 1) return;
        contextRef.current.strokeStyle = point.c;

        contextRef.current.lineTo(point.x, point.y);
        contextRef.current.stroke();
      });
      contextRef.current.closePath();
    });
  };

  // for making undo I will need to know all the points between a mouse down event and the mouse up event
  // ie. one continuous line and then remove it from all the canvas lines. and then repaint the canvas.
  // if it is the first line then clearing the canvas can do the thing.

  const undoDrawing = () => {
    if (drawing.length === 0) return;
    const newDrawing = drawing;
    const removed = newDrawing.pop();

    setRemovedLines([...removedLines, removed]);
    setDrawing([...newDrawing]);
    repaintCanvas(newDrawing);
  };

  // for redoing thing i must reverse the undo which means i have to some how remember the undo and then add it to the current drawing.
  const redoDrawing = () => {
    if (removedLines.length === 0) return;

    const toAdd = removedLines.pop();

    setDrawing([...drawing, toAdd]);
    setRemovedLines([...removedLines]);
    repaintCanvas([...drawing, toAdd]);
  };

  // side effects

  useEffect(() => {
    contextRef.current.strokeStyle = currentColor;
  }, [currentColor]);

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
          clearCanvas,
          startDrawing,
          endDrawing,
          undoDrawing,
          redoDrawing,
          draw,
          changeColor: [currentColor, setCurrentColor],
         
        },
      }}
    >
      {children}
    </contextProvider.Provider>
  );
};

export default Context;
