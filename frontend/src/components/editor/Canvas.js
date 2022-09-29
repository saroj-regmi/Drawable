import React, { useContext, useEffect } from "react";
import { contextProvider } from "../../Context";
import styles from "../../styles/editor/canvas.module.css";
function Canvas() {
  const { canvasContext } = useContext(contextProvider);

  const { canvasRef, startDrawing, endDrawing, draw, prepareCanvas } =
    canvasContext;

  useEffect(() => {
    prepareCanvas();
  }, []);
  return (
    <canvas
      ref={canvasRef}
      onMouseDown={startDrawing}
      onMouseUp={endDrawing}
      onMouseMove={draw}
      className={styles.canvas}
    ></canvas>
  );
}

export default Canvas;
