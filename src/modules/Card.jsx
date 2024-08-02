import '../styles/Card.css'

export default function Card({pokemon, number, onClick}) {
    let name = pokemon.pokemonName;
    let imgLink = pokemon.pokemonImage;
    let type = pokemon.pokemonType;

    return (
        <div className="card" onClick={onClick}>
            <div className="imageContainer">
                <img className='pokemonImage' src={imgLink} alt={name} />
            </div>

            <div className="information">
                <p className='name'>{name}</p>
                <p className='type'>Type: {type}</p>
                <p className='number'>#{number}</p>
            </div>
        </div>
    )
}
