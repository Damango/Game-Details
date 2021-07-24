import React from 'react';
import "./ESportsCard.css"
const EsportsCard = (props) => {
    return ( <div className="esports-card-container">
        <div className="left-side-esport center-y">
            <div className="team-logo center-y"></div>
            <div className="team-name">100T</div>
            <div className="team-outcome">Win</div>
        </div>
        <div className="middle-esport"></div>
        <div className="right-side-esport"></div>
    </div> );
}
 
export default EsportsCard;