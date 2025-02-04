let lastPosition = { top: 0, left: 0 }; // Store the last position of the element

function moveRandomEl(elm) {
  elm.style.position = "absolute";

  // Minimum distance to maintain between the current and previous position (in percentage of the viewport)
  const minDistance = 15; // 15% of viewport width/height

  let randomX, randomY, distance;

  do {
    randomX = Math.floor(Math.random() * 90 + 5) + "%"; // Random X (between 5% and 95%)
    randomY = Math.floor(Math.random() * 90 + 5) + "%"; // Random Y (between 5% and 95%)

    // Calculate the distance between the new random position and the last position
    const lastTop = parseFloat(lastPosition.top);
    const lastLeft = parseFloat(lastPosition.left);

    const distanceX = Math.abs(parseFloat(randomX) - lastLeft);
    const distanceY = Math.abs(parseFloat(randomY) - lastTop);

    distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  } while (distance < minDistance); // Loop until the new position is far enough from the last one

  // Apply the new position
  elm.style.top = randomY;
  elm.style.left = randomX;

  // Update the last position to the new one
  lastPosition = { top: randomY, left: randomX };
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});
