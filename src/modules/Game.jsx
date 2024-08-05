import '../styles/Game.css'
import { useState, Fragment } from 'react'
import reorder from '../scripts/reorder';
import { getCache } from '../scripts/loadAndSave';

import Card from './Card';
import GameInformation from './gameInformation';

export default function Game({list, getList}) {
    const [gameList, setGameList] = useState(list);
    const [selectedCards, setSelectedCards] = useState([]);
    const [topScore, setTopScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const cache = getCache();

    function handleReorder() {
        let reorderedList = reorder([...gameList]);
        setGameList([...reorderedList]);
    }

    function handlePlayerSelection(number) {
        if (selectedCards.includes(number)) {
            setGameOver(true);
        }else {
            handleReorder()
            setSelectedCards([...selectedCards, number]);
        }
    }

    function handleCardClick(e){
        let number = e.target.getAttribute("number")

        if (!gameOver) {
            handlePlayerSelection(number);
        }else {
            handleGameOver();
        };
    }

    function handleGameOver() {
        console.log("Game Over");
    }

    function handleRestartGame() {
        if (selectedCards.length > topScore) {
            setTopScore(selectedCards.length); //Only the top score gets updated
        }

        setGameOver(false); //New game baby !!
        setSelectedCards([]); //Restart the selected cards array
        getList(); //Fetch new cards for the game
        setGameList(list); //Update the game list and with it the components
    }

    return (
        <>
            <GameInformation topScore={topScore} gameOver={gameOver} selectedCards={selectedCards}/>
            <button className='bn5' onClick={handleRestartGame}>Restart Game</button>
            <hr />
            <div className={`container ${gameOver && "disabled"}`}>
                {gameList.map( pokemonNumber => {
                    return (
                        <Card pokemon={cache[pokemonNumber]} number={pokemonNumber} key={pokemonNumber} onClick={handleCardClick} gameOver={false}/>
                    )
                } )}
            </div>
        </>
    )
}
