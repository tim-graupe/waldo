function getClickLocation(event) {
  let xCord = event.offsetX;
  let yCord = event.offsetY;

  let xPercent = Math.round((xCord / window.innerWidth) * 10);
  let yPercent = Math.round((yCord / window.innerHeight) * 10);
  console.log(xPercent, yPercent);
  return { xPercent, yPercent };
}

export default getClickLocation;
