function getClickLocation(e) {
  const imgWidth = e.target.width;
  const imgHeight = e.target.height;
  const xCoord = e.offsetX;
  const yCoord = e.offsetY;

  const xPercent = Math.floor((xCoord * 100) / imgWidth);

  const yPercent = Math.floor((yCoord * 100) / imgHeight);


  console.log(xPercent, yPercent)
  return { xPercent, yPercent };
}

export default getClickLocation;
