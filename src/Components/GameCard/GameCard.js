import React, {useRef} from 'react';
import "./GameCard.css"


const GameCard = (props) => {


    const cardRef = useRef()


    function makeCardBig(){
        cardRef.current.style.position = 'absolute';
        cardRef.current.style.width = '100%'
        cardRef.current.style.height = '100%'
    }




    return ( <div className="game-card-container" ref={cardRef} onClick={makeCardBig}>
        <div className="game-image center-x" style={{backgroundImage:`url(${props.data.cardImage})` }}></div>
        <div className="game-title-container">{props.data.title}</div>
        <div className="bussiness-model"><div className="model-line center-y"></div> {props.data.bussinessModel}</div>
        <div className="game-tags-container">
            {props.data.tags.map((tag) => <div className="game-tag">{tag}</div>)}
        </div>
        
    </div> );
}
 
export default GameCard;