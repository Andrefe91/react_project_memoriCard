import '../styles/Game.css'
import { useState, Fragment } from 'react'
import reorder from '../scripts/reorder';
import { getCache } from '../scripts/loadAndSave';

import Card from './Card';

export default function Game({list}) {
    const [gameList, setGameList] = useState(list);
    const cache = getCache();

    function handleReorder() {
        let reorderedList = reorder([...gameList]);
        setGameList([...reorderedList]);
    }

    return (
        <>
            <div>Game</div>

            <div className="container">
                {gameList.map( pokemonNumber => {
                    return (
                        <Card pokemon={cache[pokemonNumber]} number={pokemonNumber} key={pokemonNumber} onClick={handleReorder}/>
                    )
                } )}
            </div>
        </>
    )
}
