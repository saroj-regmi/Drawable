import React, { useContext } from "react";
import { contextProvider } from "../../Context";
import Player from "./Player";
import styles from "../../styles/sidenav/players.module.css";
function Players() {
  // importing player data from the context
  const {
    player: {
      active: [activePlayers, setActivePlayers],
    },
  } = useContext(contextProvider);

  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <div className={styles.text}>Players</div>
        <div className={styles.number}>{activePlayers.length} / 5</div>
      </div>

      <div className={styles.players}>
        {activePlayers.map((player, index) => {
          return <Player key={index} details={player}></Player>;
        })}
      </div>
    </div>
  );
}

export default Players;
