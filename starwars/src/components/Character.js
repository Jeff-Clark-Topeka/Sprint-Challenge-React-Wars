// Write your Character component here
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import App from '../App'

const Character = () => {

    const [characters, setCharacters] = useState([])

    useEffect(() => {
        axios
            .get('https://swapi.py4e.com/api/people/1/')
            .then(response => {
                console.log(response)
                setCharacters(response.data)
            })

            .catch(error => console.log('error', error))
    }, []);
}

export default Character;