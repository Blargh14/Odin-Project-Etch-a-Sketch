grid = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    gridPiece = document.createElement("div");
    gridPiece.style.backgroundColor = "white";
    gridPiece.style.aspectRatio = "1/1";
    gridPiece.style.height = "calc(6%)";
    gridPiece.style.width = "calc(6%)";
    gridPiece.textContent = i;
    grid.appendChild(gridPiece);
}