function displayBox(e) {
  const xbox = document.getElementById("Xbox");
  let rect = xbox.getBoundingClientRect();
  const menu = document.getElementById("dropdown");

  xbox.addEventListener("click", function (e) {
    e.preventDefault();
  });
  
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  menu.style.top = `${y}px`;
  menu.style.left = `${x}px`;
  menu.style.display = "inline-block";
  menu.style.position = "absolute";
}

export default displayBox;