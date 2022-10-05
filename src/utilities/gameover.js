import { addScore } from "../firebase";
// import chars from "./charactersObjects";
let time = 0;

setInterval(() => {
  time++;
}, 1000);

export default function gameOver(props) {
  const { chars } = props;

  if (chars.every((char) => char.found === true)) {
    let name = prompt("Enter your name for the high score!");
    addScore(name, time);
  }
}
