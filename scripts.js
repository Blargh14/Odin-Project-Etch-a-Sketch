grid = document.querySelector("#container");
newGridButton = document.querySelector("#new");
extra1Button = document.querySelector("#extra1");
extra2Button = document.querySelector("#extra2");

currentGridSize = 16;

populateGrid(currentGridSize);

grid.addEventListener("mousemove", changeGridPiece);

newGridButton.addEventListener("click", () => {
    currentGridSize = NaN;

    while (currentGridSize > 100 || Object.is(NaN, currentGridSize)) {
        currentGridSize = parseInt(prompt("Enter a number 1-100, 0 and below for an empty grid"));
    }

    populateGrid(currentGridSize);
});

extra1 = false;
extra2 = false;
darken = 1.0;

extra1Button.addEventListener("click", () => {
    extra1 = !extra1;
    extra2 = false;
    populateGrid(currentGridSize);
});
extra2Button.addEventListener("click", () => {
    extra2 = !extra2;
    extra1 = extra2;
    populateGrid(currentGridSize);
});

function changeGridPiece(event) {
    if (event.target === event.currentTarget) {
        return;
    }

    if (extra1) {
        if (extra2) {
            return;
        }
        else {
            r = Math.floor(Math.random() * 256);
            g = Math.floor(Math.random() * 256);
            b = Math.floor(Math.random() * 256);
            event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        }
    }
    else {
        event.target.style.backgroundColor = "black";
    }
}

function populateGrid(num) {
    grid.textContent = '';
    for (let i = 0; i < num * num; i++) {
        gridPiece = document.createElement("div");
        gridPiece.style.backgroundColor = "grey";
        gridPiece.style.aspectRatio = "1/1";
        gridPiece.style.height = `calc(${100/num}% - ${(num+3)/num}px)`; // Exact calculations don't really work with whole numbers
        gridPiece.style.width = `calc(${100/num}% - ${(num+3)/num}px)`; // But it looks "close enough"
        grid.appendChild(gridPiece);
    }
}