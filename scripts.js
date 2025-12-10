grid = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    gridPiece = document.createElement("div");
    gridPiece.style.backgroundColor = "grey";
    gridPiece.style.aspectRatio = "1/1";
    gridPiece.style.height = "calc(6%)";
    gridPiece.style.width = "calc(6%)";
    grid.appendChild(gridPiece);
}

grid.addEventListener("mousemove", changeGridPiece)

function changeGridPiece(event) {
    if (event.target === event.currentTarget) {
        return;
    }

    event.target.style.backgroundColor = "black";
}