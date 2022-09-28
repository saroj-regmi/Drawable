import React from "react";
import Player from "./Player";

function Players() {
  const activePlayers = [
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
  ];

  return (
    <div className="mainContainer">
      <div className="title">
        <div className="text">Players</div>
        <div className="number">{activePlayers.length} / 5</div>
      </div>

      <div className="players">
        {activePlayers.map((player, index) => {
          return <Player key={index} details={player}></Player>;
        })}
      </div>
    </div>
  );
}

export default Players;
