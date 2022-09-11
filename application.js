"use strict";

//Page-layout
const gridContainer = document.querySelector(".grid-container");
const controlPanel = document.querySelector(".control-panel");
const createGridButton = document.querySelector("#create-grid");
const clearButton = document.querySelector("#clear");

let squaresSide = 16;
let cell = [];

let newSize = document.querySelector(".grid-size-input");
newSize.value = 16;

//event listeners
createGridButton.addEventListener("click", function () {
  //clear();
  createGrid(newSize.value);
});

clearButton.addEventListener("click", clearGrid);

//set grid size

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
  onLoad();
}

function removeCells() {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
}

function onLoad() {
  let gridPixels = document.querySelectorAll(".cell");
  gridPixels.forEach((gridPixel) =>
    gridPixel.addEventListener("mouseover", colorGrid)
  );
}

function colorGrid() {
  console.log("triggers colorGrid");
  this.style.backgroundColor = "#000000";
}

function clearGrid() {
  console.log("Grid Cleared");
  let allCells = document.querySelectorAll(".cell").forEach((cell) => {
    cell.style.backgroundColor = "white";
  });
}
