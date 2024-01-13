import React from "react";
import GameCard from "./GameCard";

const gamesData = [
    {
        id: 1,
        title: `Game 1`,
        cooverArt: `URL`
    },
    {
        id: 2,
        title: `Game 2`,
        cooverArt: `URL`
    },
];

function HomePage () {
    return (
        <div className="home-page">
      <h1>Game Database</h1>
      <div className="game-card-container">
        {gamesData.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}
export default HomePage;