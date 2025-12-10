grid = document.querySelector("#container");
button = document.querySelector("#new")

populateGrid(16);

grid.addEventListener("mousemove", changeGridPiece);

button.addEventListener("click", () => {
    newGridValue = NaN;

    while (newGridValue > 100 || Object.is(NaN, newGridValue)) {
        newGridValue = parseInt(prompt("Enter a number 1-100, 0 and below for an empty grid"));
    }

    grid.textContent = '';
    populateGrid(newGridValue);
});

function changeGridPiece(event) {
    if (event.target === event.currentTarget) {
        return;
    }

    event.target.style.backgroundColor = "black";
}

function populateGrid(num) {
    for (let i = 0; i < num * num; i++) {
        gridPiece = document.createElement("div");
        gridPiece.style.backgroundColor = "grey";
        gridPiece.style.aspectRatio = "1/1";
        gridPiece.style.height = `calc(${100/num}% - ${(num+3)/num}px)`; // Exact calculations don't really work with whole numbers
        gridPiece.style.width = `calc(${100/num}% - ${(num+3)/num}px)`; // But it looks "close enough"
        grid.appendChild(gridPiece);
    }
}