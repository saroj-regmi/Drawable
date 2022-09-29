import React from "react";
import Players from "./Players";
import styles from "../../styles/sidenav/sidenav.module.css";
function SideNav() {
  return (
    <div className={styles.sideNav}>
      <div>logo</div>
      <Players />
    </div>
  );
}

export default SideNav;
