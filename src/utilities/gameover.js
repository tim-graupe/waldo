import chars from "../imgs/characters"

export default function gameOver(){
    
    console.log(chars.every(char => char.found === true))

}