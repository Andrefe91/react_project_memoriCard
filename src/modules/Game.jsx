import '../styles/Game.css'
import { useState } from 'react'
import reorder from '../scripts/reorder';
import { getCache } from '../scripts/loadAndSave';

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
            <div>{gameList.join(" - ")}</div>
            <button onClick={handleReorder}>Reorder List</button>
        </>
    )
}
