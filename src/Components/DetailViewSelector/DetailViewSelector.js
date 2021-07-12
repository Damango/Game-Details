import React from 'react';
import { useSpring, animated } from 'react-spring'
import "../DetailView/DetailView.css"

const DetailViewSelector = (props) => {

    const detailSelector = useSpring({from: { opacity: 0}, to: { opacity: 1}, delay: 1000})


    function selectorStyleHandler(){
        if(props.textView === props.text){
            return('detail-view-nav-selector-selected')
        }
        else{
            return('detail-view-nav-selector')
        }
    }
  


    return ( <animated.div  className={selectorStyleHandler()} onClick={() => {props.setTextViewState(props.text); props.setTextViewData(props.detailViewData)}} style={detailSelector}>{props.text}</animated.div> );
}
 
export default DetailViewSelector;