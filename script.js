const gridContainer = document.querySelector(".container");
const resetBtn = document.querySelector(".reset");
const slider = document.querySelector(".grid-size");

createGrid(16);
updateSlider();

function createGrid2(size) {}

function createGrid(size) {
  gridContainer.setAttribute(
    "style",
    `grid-template-columns: repeat(${size}, 1fr);
    grid-template-rows: repeat(${size}, 1fr);`
  );

  for (let i = 0; i < size * size; i++) {
    let newDiv = document.createElement("div");
    newDiv.addEventListener("mouseenter", () => {
      newDiv.style.backgroundColor = "black";
    });
    gridContainer.appendChild(newDiv);
  }
}

function clearCanvas() {
  let squares = gridContainer.children;
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = "white";
  }
}

function deleteGrid() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
}

function newGridSize(e) {
  deleteGrid();
  createGrid(e.target.value);
}

function updateSlider() {
  let x = document.querySelector(".grid-size").value;
  console.log(x);
  document.querySelector(".slider-value").innerHTML = `${x} x ${x}`;
}

resetBtn.addEventListener("click", clearCanvas);
slider.addEventListener("change", newGridSize);
