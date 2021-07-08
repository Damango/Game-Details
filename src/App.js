import {useState} from 'react'
import DetailView from "./Components/DetailView/DetailView"
import './App.css';
import GamesListContainer from "./Components/GamesListContainer/GamesListContainer"
import apexImage from "./media/apeximage.jpg"
import valorantImage from "./media/valorantimage.jpg"
import haloImage from "./media/haloimage.png"
function App() {

    let gamesList = {
      fps: [
        {title: "Valorant",
          bussinessModel: "Free to Play",
          tags: ["Shooter", "Multiplayer"],
          cardImage: valorantImage
        },
        {title: "Apex Legends",
          bussinessModel: "Free to Play",
          tags: ["Shooter", "Multiplayer"],
          cardImage: apexImage
        }, {title: "Halo Infinite",
        bussinessModel: "Free to Play",
        tags: ["Shooter", "Multiplayer"],
        cardImage: haloImage
      },
      {title: "Apex Legends",
        bussinessModel: "Free to Play",
        tags: ["Shooter", "Multiplayer"]
      },
      {title: "Apex Legends",
      bussinessModel: "Free to Play",
      tags: ["Shooter", "Multiplayer"]
    },
    {title: "Apex Legends",
    bussinessModel: "Free to Play",
    tags: ["Shooter", "Multiplayer"]
  }
      ],
      mmo: [
        {title: "World of Warcraft",
          bussinessModel: "Subscription Based",
          tags: ["Role Playing", "Multiplayer"]
        },
        {title: "Guild Wars 2",
          bussinessModel: "Subscription Based",
          tags: ["Role Playing", "Multiplayer"]
        }
      ]
    }


    const [detailView, setDetailView] = useState(false);

    function renderDetailView(){
        if(detailView !== false){
          return(<DetailView detailViewData={detailView} setDetailView={setDetailView}/> )
        }
    }


  return (
    <div className="App">

      {renderDetailView()}

      <div className="game-details-container">
        <div className="game-details-wrapper center-all">
          <GamesListContainer data={gamesList.fps} type={"FPS Games"} setDetailView={setDetailView}/>
          <GamesListContainer data={gamesList.mmo} type={"MMORPG"} setDetailView={setDetailView} />

        </div>
      </div>



      
    </div>
  );
}

export default App;
