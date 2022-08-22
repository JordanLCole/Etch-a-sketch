"use strict";

//document elements
const gridContainer = document.querySelector(".grid-container");

//buttons
const createGrid = document.getElementById("create-grid");

//event listeners
createGrid.addEventListener("click", function () {
  console.log("button clicked");
  let gridSize = document.querySelector("input").valueAsNumber;
  gridContainer.style.setProperty("--grid-rows", gridSize);
  console.log(gridSize);
  gridContainer.style.setProperty("--grid-cols", gridSize);
  for (let i = 0; i < gridSize * gridSize; i++) {
    let cell = document.createElement("div");
    gridContainer.appendChild(cell).className = "grid-item";
  }
});
