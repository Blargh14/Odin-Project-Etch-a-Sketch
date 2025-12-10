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

extra1Button.addEventListener("click", () => {
    if (extra2) {
        extra2 = false;
        extra1 = false;
    }
    extra1 = !extra1;
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
            if (event.target.style.backgroundColor === "grey") {
                r = Math.floor(Math.random() * 256);
                g = Math.floor(Math.random() * 256);
                b = Math.floor(Math.random() * 256);
                event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
            else {
                darken = parseFloat(event.target.getAttribute("darken"));
                if (darken === 0) {
                    return
                }
                rgb = event.target.style.backgroundColor.slice(4, -1).split(", ");
                r = rgb[0] / darken * (darken - .1);
                g = rgb[1] / darken * (darken - .1);
                b = rgb[2] / darken * (darken - .1);
                event.target.setAttribute("darken", `${darken - .1}`);
                event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            }
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
        if (extra2) {
            gridPiece.setAttribute("darken", "1.0")
        }
        gridPiece.style.backgroundColor = "grey";
        gridPiece.style.aspectRatio = "1/1";
        gridPiece.style.height = `calc(${100/num}% - ${(num+3)/num}px)`; // Exact calculations don't really work with whole numbers
        gridPiece.style.width = `calc(${100/num}% - ${(num+3)/num}px)`; // But it looks "close enough"
        grid.appendChild(gridPiece);
    }
}