import React from 'react'

const CharacterCard = props => {

    console.log(props)
    const { character } = props;

    return (
        <div>
            <h3>{character.name}</h3>
            <p>{character.height}</p>
            <p>{character.mass}</p>
            <p>{character.hair_color}</p>
            <p>{character.skin_color}</p>
        </div>
    )
}

export default CharacterCard;