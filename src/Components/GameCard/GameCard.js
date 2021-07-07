import React, {useRef, useEffect} from 'react';
import "./GameCard.css"


const GameCard = (props) => {


    const cardRef = useRef()
    const rectRef = useRef()

    let movingRects = [];
    for(let i = 0; i < 4; i++){
        movingRects.push(Math.floor(Math.random() * 300))
    }
    useEffect(() => {
        
        for(let i = 0; i < 4; i++){
            movingRects.push(Math.floor(Math.random() * 300))
        }
    }, [])

    function makeCardBig(){
        cardRef.current.style.position = 'absolute';
        cardRef.current.style.width = '100%'
        cardRef.current.style.height = '100%'
    }


    function moveRect(){

 

    }

 
    



    return ( <div className="game-card-container" ref={cardRef} >
        
        <div className="moving-rects-container">
            

            
        </div>
        <div className="anim-rect" style={{top: movingRects[0]}} ref={rectRef}></div>
        <div className="anim-rect2" style={{top: movingRects[1]}} ref={rectRef}></div>
        <div className="anim-rect3"  ref={rectRef}></div>
        <div className="anim-rect4" ref={rectRef}></div>
      
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