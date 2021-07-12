import React, {useRef, useEffect} from 'react';
import { useSpring, animated } from 'react-spring'
import "./GameCard.css"


const GameCard = (props) => {


   

    const styles = useSpring({ from:{top: -200, opacity: 0}, to:{top: 0, opacity: 1} ,  delay: (props.index * 100) + 100, config:{tension: 0,    }})

    

    console.log(styles)
    



    return ( <animated.div className="game-card-container" style={styles}  onClick={() => {props.setDetailView(props.data)}}>
        
     
        <div className="anim-rect"></div>
        <div className="anim-rect2"></div>
        <div className="anim-rect3"></div>
        <div className="anim-rect4"></div>
      
         <div className="game-image center-x" style={{backgroundImage:`url(${props.data.cardImage})` }}></div>
        <div className="game-title-container">{props.data.title.toUpperCase()}</div>
        <div className="bussiness-model"><div className="model-line center-y"></div> {props.data.bussinessModel}</div>
        <div className="game-tags-container">
            {props.data.tags.map((tag) => <div className="game-tag">{tag}</div>)}
        </div>
        
    </animated.div> );
 
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