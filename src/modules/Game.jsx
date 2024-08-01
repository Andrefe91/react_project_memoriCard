import '../styles/Game.css'
import { useState } from 'react'

export default function Game({list}) {
    const [gameList, setGameList] = useState(list);
    


    return (
        <>
            <div>Game</div>
            <div>{gameList.join(" - ")}</div>
        </>
    )
}
