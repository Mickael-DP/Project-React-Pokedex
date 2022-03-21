import './style.css'


function PokemonCard({ id, name, image, types }) {
    id = ('00' + id).slice(-3)
    return (
        <div className="card">
            <p className="num-id"> No.{id}</p>
            <h3 className="pokename"> {name} </h3>
            <img src={image} alt="photo_pokemon" />
            <div className="chip">
                {types.map((type) => {
                    return (
                        <span key={type} className={'types-' + type}>
              {' '}
                            {type}
            </span>
                    )
                })}
            </div>
        </div>
    )
}

export default PokemonCard