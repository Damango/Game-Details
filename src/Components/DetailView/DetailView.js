import React from 'react';
import "./DetailView.css"

const DetailView = (props) => {
    return ( <div className="detail-view-container">
       
        <div className="detail-view-image">
            <div className="detail-view-image-overlay">
                <div className="next-image-box"></div>
            </div>

        
        </div>
        <div className="detail-view-main-body">
            <div className="detail-view-main-body-wrapper center-all">
            <button className="close-detail-view-button" onClick={() => {props.setDetailView(false)}}>CLOSE</button>
            <div className="detail-view-title">{props.detailViewData.title.toUpperCase()}</div>
            <div className="detail-view-developer">Developed By: <span style={{borderBottom: '2px solid #e74c3c', color: "rgb(29, 29, 29)", fontWeight: 'bold', fontSize: '30px', fontFamily:"Raleway"}}>{props.detailViewData.developer}</span></div>
            <div className="detail-view-buttons">
                <button className="detail-view-button">Visit Website</button>
                <button className="detail-view-button">View on Steam</button>
            </div>
            <div className="detail-view-navigator">
                <div className="detail-view-nav-selector">Overview</div>
                <div className="detail-view-nav-selector">Esports</div>
                <div className="detail-view-nav-selector">News</div>
            </div>
            <div className="detail-view-body">
                <div className="detail-view-text-chunk">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi massa, eleifend sit amet odio eu, fringilla varius lorem. Sed mauris orci, pretium rutrum mi at, vehicula condimentum odio. Praesent quis elit non enim condimentum accumsan vel id odio. Vestibulum sodales urna vitae metus ornare pharetra. Etiam vitae euismod turpis. Proin a sapien metus. Mauris lacus tortor, egestas sit amet leo vel, tincidunt rhoncus sapien. Praesent turpis mi, porta at augue eget, vulputate efficitur eros. Donec congue nunc a urna faucibus, et convallis ante sagittis. Vivamus lobortis purus ante, eget pulvinar lorem aliquam at.

                </div>
                <div className="detail-view-text-chunk">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi massa, eleifend sit amet odio eu, fringilla varius lorem. Sed mauris orci, pretium rutrum mi at, vehicula condimentum odio. Praesent quis elit non enim condimentum accumsan vel id odio. Vestibulum sodales urna vitae metus ornare pharetra. Etiam vitae euismod turpis. Proin a sapien metus. Mauris lacus tortor, egestas sit amet leo vel, tincidunt rhoncus sapien. Praesent turpis mi, porta at augue eget, vulputate efficitur eros. Donec congue nunc a urna faucibus, et convallis ante sagittis. Vivamus lobortis purus ante, eget pulvinar lorem aliquam at.

                </div>
                <div className="detail-view-text-chunk">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nisi massa, eleifend sit amet odio eu, fringilla varius lorem. Sed mauris orci, pretium rutrum mi at, vehicula condimentum odio. Praesent quis elit non enim condimentum accumsan vel id odio. Vestibulum sodales urna vitae metus ornare pharetra. Etiam vitae euismod turpis. Proin a sapien metus. Mauris lacus tortor, egestas sit amet leo vel, tincidunt rhoncus sapien. Praesent turpis mi, porta at augue eget, vulputate efficitur eros. Donec congue nunc a urna faucibus, et convallis ante sagittis. Vivamus lobortis purus ante, eget pulvinar lorem aliquam at.

                </div>
            </div>
            </div>
           
        </div>
    </div> );
}
 
export default DetailView;