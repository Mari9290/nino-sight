//import logo from './logo.svg';

import { useState } from "react";
import { data } from "./data";
import './App.css';

function App () {

  const [sight, setSight] = useState(0);
  const {id, sightName, image, description} = data[sight];

  const [sights, setSights] = useState(data);

  const nextSight = () => {
    setSight((sight => {
      sight++;
      if(sight>data.length-1){
        sight=0
      }
      return sight;
    }))
  }

  const backSight = () => {
    setSight((sight => {
      sight--;
      if(sight<0){
        return data.length-1
      }
      return sight;
    }))
  }

  const removeSight = (id) => {
    let newSight = sights.filter(sights => sights.id!== id);
      setSights(newSight)
  }


  return(
    <div key={id}>
      <div className="container">
        <h1>Достопримечательности Нижнего Новгорода</h1>
      </div>
      <div className="main">

      <div className="container">
        <h2>{sightName}</h2>
      </div>
     
      <div className="container">
        <img className="fotoSight" src={image} height='300px' alt='foto {sightName}'/>
      </div>

      <div className="container text">
        <h4>{description}</h4>
      </div>

      <div className="container">
        <button onClick={backSight} className="btn">НАЗАД</button>
        <button onClick={nextSight} className="btn">ДАЛЕЕ</button>
      </div>
      </div>

      <div className="container">
        <h2>Планирую посетить:  {sights.length}</h2>
      </div>
      <div className="position">
      {sights.map((element => {
        const {id, sightName,image} = element;
        return(<div key={id}>
          
          <div className="container">
              <h4>{id} - {sightName}</h4>
          </div>

          <div className="container">
            <img className="fotoSight" src={image} height='300px' alt='foto {sightName}'/>
          </div>

          <div className="container">
            <button onClick={() => removeSight(id)} className="btn">СКРЫТЬ</button>
          </div>
        </div>)
      }))}
      </div>
      <div className="container main">
        <button onClick={() => setSights([])} className="btn">СКРЫТЬ ВСЁ</button>
      </div>
    </div>
  )

}

export default App;
