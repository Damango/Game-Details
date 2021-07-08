import React, {useRef, useEffect} from 'react';
import "./GameCard.css"


const GameCard = (props) => {


   

   

    

 
    



    return ( <div className="game-card-container"  onClick={() => {props.setDetailView(props.data)}}>
        
        <div className="moving-rects-container">
            

            
        </div>
        <div className="anim-rect" ></div>
        <div className="anim-rect2" ></div>
        <div className="anim-rect3"  ></div>
        <div className="anim-rect4" ></div>
      
         <div className="game-image center-x" style={{backgroundImage:`url(${props.data.cardImage})` }}></div>
        <div className="game-title-container">{props.data.title.toUpperCase()}</div>
        <div className="b ussiness-model"><div className="model-line center-y"></div> {props.data.bussinessModel}</div>
        <div className="game-tags-container">
            {props.data.tags.map((tag) => <div className="game-tag">{tag}</div>)}
        </div>
        
    </div> );
 
}
 
export default GameCard;



/* Other Style 

<div className="game-card-container" ref={cardRef} onClick={makeCardBig}>
         <div className="game-image center-x" style={{backgroundImage:`url(${props.data.cardImage})` }}></div>
        <div className="game-title-container">{props.data.title}</div>
        <div className="bussiness-model"><div className="model-line center-y"></div> {props.data.bussinessModel}</div>
        <div className="game-tags-container">
            {props.data.tags.map((tag) => <div className="game-tag">{tag}</div>)}
        </div>
        
    </div>







*/