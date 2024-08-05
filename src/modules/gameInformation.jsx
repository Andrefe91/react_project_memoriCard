
import '../styles/gameInformation.css'

export default function GameInformation({topScore, gameOver, selectedCards}) {
    return (
        <>
            <p>Top Score: {topScore}</p>
            <p>Current Score: {selectedCards.length}</p>
        </>
    )
}
