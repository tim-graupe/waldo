export default function timer() {
  let timer = document.getElementById("timer");

  setInterval(() => {
    timer.textContent++;
  }, 1000);
  return timer;
}
//to be replaced by firebase