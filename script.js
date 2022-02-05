const gridContainer = document.querySelector(".container");
createGrid(100);

function createGrid(size) {
  var rows = [];
  var cols = [];
  // Get number of col/rows
  let x = Math.sqrt(size);

  for (let i = 0; i < x; i++) {
    let newDiv = document.createElement("div");
    rows.push(newDiv);
    newDiv.classList.add(`row${i}`);
    newDiv.setAttribute(
      "style",
      "display: flex; flex: 1; flex-direction: column;"
    );
    gridContainer.appendChild(newDiv);
    for (let j = 0; j < x; j++) {
      let rowContainer = document.querySelector(`.row${i}`);
      let newDiv = document.createElement("div");
      cols.push(newDiv);
      newDiv.classList.add(`col${j}`);
      newDiv.setAttribute("style", "display: flex; flex: 1");
      newDiv.addEventListener("mouseenter", () => {
        newDiv.style.backgroundColor = "black";
      });
      rowContainer.appendChild(newDiv);
    }
  }
}
