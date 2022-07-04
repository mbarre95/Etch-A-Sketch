const container = document.querySelector('.container');
let size = 16;

createGrid(size);

function createGrid(int) {
    container.style.gridTemplateColumns = `repeat(${int}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${int}, 1fr)`;
    
    for (let i = 0; i < (int * int); i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseenter', createHoverEffect);
        container.appendChild(square);
    }    
}

function createHoverEffect() {
    this.classList.add('color-change');
}

const changeGridSizeBtn = document.querySelector('.change');
changeGridSizeBtn.addEventListener('click', changeGridSize);

function changeGridSize() {
    const userInputAsString = window.prompt('Please select the number of squares per side for the new grid', 
    'Choose a number between 1 and 100');
    const userInputAsInt = parseInt(userInputAsString);
    if (userInputAsInt > 100 || userInputAsInt < 1) {
        alert('Out of Range');
        return;
    }
    deleteGrid();
    createGrid(userInputAsInt);
}

const clearGridBtn = document.querySelector('.clear');
clearGridBtn.addEventListener('click', clearGrid);

function clearGrid() {
    const squares = document.querySelectorAll('.color-change');
    squares.forEach(square => {
        square.classList.remove('color-change');
    });
}

function deleteGrid() {
    container.innerHTML = '';
}