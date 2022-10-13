import { addScore } from "../firebase";
let time = 0;

setInterval(() => {
  time++;
}, 1000);

export default function gameOver(chars, level) {
  if (chars.every((char) => char.found === true)) {
    let name = prompt("Enter your name for the high score!");
    addScore(name, time, level);
  }
}
