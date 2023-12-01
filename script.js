document.addEventListener("DOMContentLoaded", function () {
  createGrid();

  const cells = document.querySelectorAll(".container div");

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "#000";
    });
  });

  function createGrid() {
    const container = document.querySelector(".container");
    for (let i = 0; i < 256; i++) {
      const cell = document.createElement("div");
      container.appendChild(cell);
    }
  }

  const resetButton = document.querySelector(".reset-btn");
  resetButton.addEventListener("click", () => {
    cells.forEach((cell) => {
      cell.style.backgroundColor = "#FFFFFF";
    });
  });
});
