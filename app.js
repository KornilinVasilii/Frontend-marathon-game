const board = document.querySelector('#board')
const SQUARES_NUMBER = 5000
const colors = [
  "#fb305e",
  "#39f11b",
  "#d30196",
  "orange",
  "#b8fd48",
  "##689cf7",
  "#4df025",
];

for (let i = 0; i < SQUARES_NUMBER; i++) { 
  const square = document.createElement('div')
  square.classList.add("square");

  square.addEventListener('mouseover', () => { 
    setColor(square);
  })

  square.addEventListener("mouseleave", () => {
    removeColor(square);
  });

  board.append(square);
}


function setColor(element) { 
  const color = getRandomColor()
  element.style.backgroundColor = color;
}

function removeColor(element) { 
  element.style.backgroundColor = "#fff";
};

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length)
  return colors[index]
}