"use strict";

//Page-layout
const gridContainer = document.querySelector(".grid-container");
const controlPanel = document.querySelector(".control-panel");
const createGridButton = document.querySelector("#create-grid");

let squaresSide = 16;
let cell = [];

//event listeners
createGridButton.addEventListener("click", function () {
  //clear();
  createGrid(newSize.value);
});

//set grid size
let newSize = document.querySelector(".grid-size-input");
newSize.value = 16;

//initial grid display

createGrid(squaresSide);

//function

function createGrid(squaresSide) {
  removeCells();
  gridContainer.style.gridTemplateColumns = `repeat(${squaresSide}, 1fr`;
  gridContainer.style.gridTemplateRows = `repeat(${squaresSide}, 1fr`;
  let numberOfCells = squaresSide * squaresSide;
  for (let i = 0; i < numberOfCells; i++) {
    cell[i] = document.createElement("div");
    cell[i].classList.add("cell");
    cell[i].style = "background-color: rgba(255, 255, 255, 1)";
    gridContainer.appendChild(cell[i]);
  }
}

function removeCells() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

cell.addEventListener("mousedown", function () {
  cell.classList.add("filled-cell");
});
