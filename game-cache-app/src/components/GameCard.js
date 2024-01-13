//This will be the game card used on the homepage for each individual game. 

import React from "react";
import { Link } from "react-router-dom";

function GameCard ({ game }) {
    return (
        <div className="game-card">
            <Link to={`/game/${game.id}`}>
                <img src={game.coverArt} alt={game.title}/> 
            </Link>

        </div>
    )
}

export default GameCard;