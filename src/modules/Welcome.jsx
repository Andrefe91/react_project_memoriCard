import '../styles/welcome.css'

export default function Welcome({getList}) {
    return (
        <>
            <div>Welcome to the game</div>
            <div>To start, press the Button !</div> <br />
            <button onClick={getList}>Generate List</button>
        </>
    )
}
