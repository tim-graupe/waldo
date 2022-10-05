function displayBox(e) {
  if (e.target.id === "bg") {
    const box = document.getElementById("bg");
    const rect = box.getBoundingClientRect();
    const menu = document.getElementById("dropdown");
    box.addEventListener("click", function (e) {
      e.preventDefault();
    });

    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    menu.style.top = `${y}px`;
    menu.style.left = `${x}px`;
    menu.style.display = "inline-block";
    menu.style.position = "relative";
  }
}

export default displayBox;
