import React from "react";
import styles from "../../styles/editor/sideController.module.css";

function SideController() {
  return (
    <div className={styles.container}>
      <div className={styles.colors}>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
      </div>
    </div>
  );
}

export default SideController;
