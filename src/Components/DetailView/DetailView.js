import React, {useState} from 'react';
import { useSpring, animated } from 'react-spring'
import "./DetailView.css"
import DetailViewSelector from '../DetailViewSelector/DetailViewSelector';
import ESportsCard from "../ESportsCard/ESportsCard"
const DetailView = (props) => {



    //States

    // Text Body State
    const [textViewState, setTextViewState] = useState('Overview')
    const [textViewData, setTextViewData] = useState(props.detailViewData.detailSections.overview)


    // Image State
    const [imageIndex, setImageIndex] = useState(0)


    //State Value for Image Slider
    const [imageTimer, setImageTimer] = useState('nextImageTimer')
   


    //Animation Styles for the detail view
    const detailContainer = useSpring({from: {opacity: 0}, to: {opacity: 1}})
    const imageBox = useSpring({from: {width: '0%'}, to: {width: '100%'}, delay: 200})
    const detailTitle = useSpring({from:{top: -100, opacity: 0}, to:{top: 0, opacity: 1},delay: 400})
    const detailDeveloper = useSpring({from: {left: -100, opacity: 0}, to:{left: 0, opacity: 1},delay: 600})
    const detailButtons = useSpring({from: {opacity: 0}, to: {opacity: 1}, delay: 800 })
    const detailSelector = useSpring({from: { opacity: 0}, to: { opacity: 1}, delay: 1000})
    const detailSelectorBorder = useSpring({from: {width: '0%'}, to: {width: '100%'}, delay: 1000}) 
    const textChunk = useSpring({from: {opacity: 0}, to: {opacity: 1}, delay: 1200})



    
    

    function handleImageChange(){
        setTimeout(() => {
            if((imageIndex + 1) > (props.detailViewData.images.length - 1)){
                setImageIndex(0)
            }
            else{{setImageIndex(imageIndex + 1)}}
            document.querySelector('.timer-bar').style.animationName = 'none'
          setTimeout(() => {
            document.querySelector('.timer-bar').style.animationName = 'nextImageTimer'
          }, 1)
           
        }, 5000)
    }

    function handNextImage(){
       if( props.detailViewData.images[imageIndex + 1] === undefined){
            return(0)
       }
       else{
           return(imageIndex + 1)

       }
    }

    function handleDetailChange(){
        if(textViewState === 'Overview'){
           return(textViewData.map((text) => <div  className="detail-view-text-chunk">{text}</div>))
           
        }
        else if(textViewState === 'Esports'){
           return(textViewData.map((card) => <ESportsCard data={card}/>))
        }
    }
    
    
    {handleImageChange()}
    
    
    
    return ( <animated.div style={detailContainer} className="detail-view-container">
   
        <animated.div style={{...imageBox, ...{backgroundImage:`url(${props.detailViewData.images[imageIndex]})`}}} className="detail-view-image">
            <div className="detail-view-image-overlay">
                <div className="timer-bar"></div>
                <div className="next-image-box" style={{backgroundImage:`url(${props.detailViewData.images[handNextImage()]})`}}></div>
            </div>

        
        </animated.div>
        <div className="detail-view-main-body">
            <div className="detail-view-main-body-wrapper center-all">
            <button className="close-detail-view-button" onClick={() => {props.setDetailView(false)}}>CLOSE</button>
            <animated.div style={detailTitle} className="detail-view-title">{props.detailViewData.title.toUpperCase()}</animated.div>
            <animated.div style={detailDeveloper} className="detail-view-developer">Developed By: <span style={{borderBottom: '2px solid #e74c3c', color: "rgb(29, 29, 29)", fontWeight: 'bold', fontSize: '30px', fontFamily:"Raleway"}}>{props.detailViewData.developer}</span></animated.div>
            <animated.div style={detailButtons} className="detail-view-buttons">
                <button className="detail-view-button" onClick={() => {console.log(props)}}>Visit Website</button>
                <button className="detail-view-button">View on Steam</button>
            </animated.div>
            <div  className="detail-view-navigator">
                <DetailViewSelector text='Overview' textView={textViewState} setTextViewData={setTextViewData} setTextViewState={setTextViewState} detailViewData={props.detailViewData.detailSections.overview}/>
                <DetailViewSelector text='Esports'  textView={textViewState} setTextViewData={setTextViewData} setTextViewState={setTextViewState} detailViewData={props.detailViewData.detailSections.esports}/>
                <DetailViewSelector text='News'   textView={textViewState} setTextViewData={setTextViewData} setTextViewState={setTextViewState} detailViewData={props.detailViewData.detailSections.news}/>
              

                <animated.div style={detailSelectorBorder} className="navigator-border-bottom"></animated.div>
            </div>
            <animated.div style={textChunk} className="detail-view-body">

                {handleDetailChange()}
             
            </animated.div>
            </div>
           
        </div>
    </animated.div> );
}
 
export default DetailView;