import React from 'react'

export default function Card({character}) {
    return (
        <div className="card m-4" style={{width: '18rem'}}>
        <div className="card-body">
            <h5 className="card-title">{character.name} - {character.className}</h5>
            <p className="card-text">{character.description}</p>
        </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">Vida: {character.vitality}</li>
            <li className="list-group-item">Fuerza: {character.strength}</li>
            <li className="list-group-item">Ataque: {character.attack}</li>
            <li className="list-group-item">Defensa: {character.def}</li>
            <li className="list-group-item">Magia: {character.magic}</li>
        </ul>
        </div>   
    )
}
