document.addEventListener("DOMContentLoaded", function () {
  createGrid();

  const cells = document.querySelectorAll(".container div");

  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      const randomColor = generateRandomColor();
      cell.style.backgroundColor = randomColor;
    });
  });

  function createGrid() {
    const container = document.querySelector(".container");
    for (let i = 0; i < 256; i++) {
      const cell = document.createElement("div");
      container.appendChild(cell);
    }
  }

  function generateRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

  const resetButton = document.querySelector(".reset-btn");
  resetButton.addEventListener("click", () => {
    cells.forEach((cell) => {
      cell.style.backgroundColor = "#FFFFFF";
    });
  });
});
