import React from 'react';
import "./GamesListContainer.css"
import GameCard from "../GameCard/GameCard"


const GamesListContainer = (props) => {
    return ( <div className="games-list-container">

        <div className="games-list-header">
            <div className="games-list-type">{props.type}</div>
            <button>Filter</button>
            <button>View All</button>
        </div>

        <div className="game-cards-container">
            {props.data.map((game, index) => <GameCard data={game} index={index} setDetailView={props.setDetailView}/>)}
        </div>


        



    </div> );
}
 
export default GamesListContainer;