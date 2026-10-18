const container = document.querySelector("#container");

function createGrid(size) {
    container.innerHTML = "";

    const squareSize = 960 / size;

for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");

    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "red";
    });

    container.appendChild(square);
   }
}

createGrid(16);

const button = document.querySelector("#resize-btn");

button.addEventListener("click", () => {
    let size = prompt("How many squares per side? (Max 100)");
    if (size > 100) {
        size = 100;
    }
    createGrid(size);
});