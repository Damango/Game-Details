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
          cardImage: valorantImage,
          developer: "Riot Games",
          detailSections:{
            overview: ['Molestie ac feugiat sed lectus vestibulum mattis. Donec adipiscing tristique risus nec feugiat in fermentum posuere. Ultricies leo integer malesuada nunc vel. Consectetur adipiscing elit duis tristique sollicitudin nibh sit. Ullamcorper velit sed ullamcorper morbi tincidunt ornare. Dictum varius duis at consectetur. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Convallis posuere morbi leo urna. Tellus molestie nunc non blandit massa enim nec dui. Odio euismod lacinia at quis risus sed. Platea dictumst quisque sagittis purus sit. Egestas maecenas pharetra convallis posuere morbi leo urna molestie. Convallis posuere morbi leo urna. Dignissim sodales ut eu sem integer.', 'In nisl nisi scelerisque eu ultrices vitae. Consectetur adipiscing elit ut aliquam purus sit amet. Ut tristique et egestas quis. Massa vitae tortor condimentum lacinia quis vel eros donec ac. Dignissim sodales ut eu sem integer vitae justo eget. Id diam vel quam elementum. Ut lectus arcu bibendum at varius vel pharetra. Non odio euismod lacinia at quis risus sed. Pharetra et ultrices neque ornare aenean euismod. Consectetur libero id faucibus nisl tincidunt.', 'Lobortis elementum nibh tellus molestie nunc non blandit. Nisl rhoncus mattis rhoncus urna neque. Elit pellentesque habitant morbi tristique. Sit amet tellus cras adipiscing enim. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Adipiscing elit pellentesque habitant morbi tristique senectus et. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Ut etiam sit amet nisl purus in. Ultrices tincidunt arcu non sodales. Imperdiet massa tincidunt nunc pulvinar sapien et. Scelerisque felis imperdiet proin fermentum leo vel. Curabitur gravida arcu ac tortor dignissim convallis aenean. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Magna fringilla urna porttitor rhoncus dolor purus non enim. Amet consectetur adipiscing elit ut aliquam purus sit amet. At tempor commodo ullamcorper a lacus vestibulum sed.', 'For this last one im checking out how many words I would need to put in so I can make this big ole line of text roll over and I can make it scroll however much that I want to when I want it to.'],
            esports: ['Some test', 'Other tests just trying to make sure that things go correctly'],
            news: []
          }
        },
        {title: "Apex Legends",
          bussinessModel: "Free to Play",
          tags: ["Shooter", "Multiplayer"],
          cardImage: apexImage,
          developer: "Respawn Entertainment"
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

    function lockScroll(){
      if(detailView !== false){
        return ({
          height: '100vh',
          width: '100vw',
          overflow:'hidden'
      })
      }
    }


  return (
    <div className="App" style={ lockScroll()}>

      {renderDetailView()}

      <div className="game-details-container" >
        <div className="game-details-wrapper center-all" >
          <GamesListContainer data={gamesList.fps} type={"FPS Games"} setDetailView={setDetailView}/>
          <GamesListContainer data={gamesList.mmo} type={"MMORPG"} setDetailView={setDetailView} />

        </div>
      </div>



      
    </div>
  );
}

export default App;
