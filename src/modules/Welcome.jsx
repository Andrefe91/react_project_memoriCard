import "../styles/welcome.css";

export default function Welcome({ getList }) {
	return (
		<>
			<h1>Welcome to the game!</h1>
			<p className="rules">
				The rules are simple, you start with a selection of 20 cards containing
				a Pokemon from a pool of about 250. Every time you select a card, the
				board will reorder for you to select another. If you select the
				same card twice, the game ends. Your goal is to pick all 20 diferent
				cards without repeating a single one.
			</p>
			<div>To start, press the Button:</div> <br />
			<button className="bn5" onClick={getList}>
				Generate List
			</button>
		</>
	);
}
