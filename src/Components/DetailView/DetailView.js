import React from 'react';
import "./DetailView.css"

const DetailView = (props) => {
    return ( <div className="detail-view-container">
        <button onClick={() => {props.setDetailView(false)}}>CLOSE</button>
        <div className="detail-view-image"></div>
        <div className="detail-view-main-body">
            <div className="detail-view-title">{props.detailViewData.title}</div>
        </div>
    </div> );
}
 
export default DetailView;