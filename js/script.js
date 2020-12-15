// initialization
const container = document.querySelector('.pad');
let dims = -1;
while (dims < 1 || dims > 100) {
    dims = prompt("Please specify a number for the dimension of the pad between 1 and 100");
}
createBoard(dims);
function createBoard(dim) {
    let size = dim * dim;
    document.documentElement.style.setProperty("--rowNum", dim);
    document.documentElement.style.setProperty("--colNum", dim);
    for (let i = 0; i < size; i++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add('square');
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.background = 'black';
        });
        container.appendChild(newDiv);
    }
}

// clear and resize functionality
const shakeBut = document.querySelector("#shake");
shakeBut.onclick = () => clear();
function clear() {
    deleteSquares();
    let dims = -1;
    while (dims < 1 || dims > 100) {
        dims = prompt("Please specify a number for the dimension of the pad between 1 and 100");
    }
    createBoard(dims);
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.style.background = 'grey';
    });
}
function deleteSquares() {
    const squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
        square.remove();
    });
}
