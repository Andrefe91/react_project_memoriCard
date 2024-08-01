import '../styles/Game.css'
import { useState } from 'react'
import reorder from '../scripts/reorder';

export default function Game({list}) {
    const [gameList, setGameList] = useState(list);

    function handleReorder() {
        let reorderedList = reorder([...gameList]);
        setGameList([...reorderedList]);
    }

    console.log(gameList);

    return (
        <>
            <div>Game</div>
            <div>{gameList.join(" - ")}</div>
            <button onClick={handleReorder}>Reorder List</button>
        </>
    )
}
