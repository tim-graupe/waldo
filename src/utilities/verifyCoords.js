import { useState, useEffect } from 'react';
import chars from '../imgs/characters'

function VerifyCoords(x, y){
    const [characters, setCharacters] = useState(chars)
    console.log('test')

    useEffect(() => {
        const verify = () => {
            characters.forEach(char => {
                if (char.coords.x === x && char.coords.y === y){
                    setCharacters(char.found = true)
                    console.log('characters')
                }
                document.addEventListener('click', verify);
                return () => {
                    document.removeEventListener('click', verify)
                }
            });
        }
    })
    

    
    return (
        <div>{characters}</div>
    )
}



export default VerifyCoords