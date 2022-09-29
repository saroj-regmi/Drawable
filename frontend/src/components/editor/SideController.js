import React, { useContext } from "react";
import { contextProvider } from "../../Context";
import styles from "../../styles/editor/sideController.module.css";

function SideController() {
  const {
    canvasContext: {
      changeColor: [currentColor, setCurrentColor],
    },
  } = useContext(contextProvider);
  console.log(currentColor);

  return (
    <div className={styles.container}>
      <div className={styles.colors}>
        <div
          className={
            currentColor === "#df5c5c"
              ? `${styles.color} ${styles.activeColor}`
              : styles.color
          }
          onClick={() => {
            setCurrentColor("#df5c5c");
          }}
        ></div>
        <div
          className={
            currentColor === "#5cdf71"
              ? `${styles.color} ${styles.activeColor}`
              : styles.color
          }
          onClick={() => {
            setCurrentColor("#5cdf71");
          }}
        ></div>
        <div
          className={
            currentColor === "#5cdfd7"
              ? `${styles.color} ${styles.activeColor}`
              : styles.color
          }
          onClick={() => {
            setCurrentColor("#5cdfd7");
          }}
        ></div>
        <div
          className={
            currentColor === "#5c81df"
              ? `${styles.color} ${styles.activeColor}`
              : styles.color
          }
          onClick={() => {
            setCurrentColor("#5c81df");
          }}
        ></div>
        <div
          className={
            currentColor === "#dcdf5c"
              ? `${styles.color} ${styles.activeColor}`
              : styles.color
          }
          onClick={() => {
            setCurrentColor("#dcdf5c");
          }}
        ></div>
        <div
          className={
            currentColor === "#383838"
              ? `${styles.color} ${styles.activeColor}`
              : styles.color
          }
          onClick={() => {
            setCurrentColor("#383838");
          }}
        ></div>
      </div>
    </div>
  );
}

export default SideController;
