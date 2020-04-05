import React, {useState} from 'react';
import './App.css';
import Character from './Components/Character'
const images = require('./images');
var appImages = new Array(12).fill({})

function generateOrder(){
  var imagesTemp = new Array(12).fill(false);

  function setNewImage(i){
    const newPosition = Math.floor(Math.random()*13);

    if (imagesTemp[newPosition] === false){
      imagesTemp[newPosition] = true;
      return images[newPosition];
    }else{
      return setNewImage(i);
    }
  }

  for (var i=0; i < images.length; i++){
    appImages[i] = setNewImage(i);
  }
}

function App() {
  const [score, setScore] = useState(0);
  const [game, setGame] = useState(true);
  generateOrder();

  function increaseScore(){
    setScore(score + 1);
  }

  function gameOver(){
    setGame(false)
  }

  if (game){
    return (
     <div className="App">
       <h2>Clicky Game!</h2>
       <p>Made for the best show ever. Don't click the same character twice or you lose!</p> <br/>
       <p>Score: {score} </p> <br/>
       {
         appImages.map((obj) => {
           return (<Character src={obj.source} onClick={{increaseScore: increaseScore, gameOver: gameOver}}></Character>);
         })
       }
     </div>
    )
  }else{
    return (
      <div className="App">
        <h2>Game Over!</h2>
        <p>Oh well</p>
      </div>
    )
  }
}

export default App;
