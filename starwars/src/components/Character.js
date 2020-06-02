// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'

const Character = () => {

    const [character, setCharacter] = useState([])

    useEffect(() => {
        axios
            .get('https://swapi.py4e.com/api/people/')
            .then(response => {
                console.log('response', response)
                setCharacter(response.data.results)
            })

            .catch(error => console.log('error', error))
    }, []);

    return (
        <div>
            {character.map((character, index) => (
                <CharacterCard key={index} character={character}/>
            ))}
        </div>
    )
}

export default Character;