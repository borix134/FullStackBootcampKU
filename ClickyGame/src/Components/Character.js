import React, {useState} from 'react';

function Character(props){
    const [clicked, setClicked] = useState(false);

    function handleClick(){
        if (clicked === false){
            props.onClick.increaseScore();
            setClicked(true)
        }else{
            props.onClick.gameOver();
        }
    }
    return <img src={props.src} style={{width: 200, height: 200, margin: 4}} onClick={handleClick} />;
}

export default Character;
