const container = document.querySelector('.container');
const title = document.createElement('h1');
const inputBox = document.createElement('div');
const input = document.createElement('input');
const btn = document.createElement('button');
const gameBox = document.createElement('div');
//add more advanced controlls after implementing basic functionality
// const controls = document.createElement('div');
const clearBtn = document.createElement('button');

let gridSize = 16;

title.classList.add('title');
btn.classList.add('btn');
clearBtn.classList.add('btn', 'clear');
gameBox.classList.add('gameBox');
inputBox.classList.add('inputBox');
input.classList.add('input');

title.innerHTML = 'Etch-a-Sketch';
btn.innerHTML = 'Update grid size';
clearBtn.innerHTML = 'Clear';
input.placeholder = 'Enter grid row size'

inputBox.appendChild(input);
inputBox.appendChild(btn);
inputBox.appendChild(clearBtn);

container.appendChild(title);
container.appendChild(inputBox);
container.appendChild(gameBox);

function createGrid(size) {
    i = 0;
    while (i < (size * size)) {
        let gameItem = document.createElement('div');
        gameItem.innerHTML = '';
        gameItem.classList.add('gameItem');
        gameItem.style.width = 100 / size + '%';

        gameBox.appendChild(gameItem);
        i++;
    }
}

function addHover() {
    let gameItems = document.querySelectorAll('.gameItem');

    Array.from(gameItems).forEach(function (gameItem) {
        gameItem.addEventListener('mouseenter', (event) => {
            event.target.classList.add('dark-bgc');
        });
    });
}

function clearGrid() {
    let gameItems = document.querySelectorAll('.gameItem');

    Array.from(gameItems).forEach(function (gameItem) {
        gameItem.classList.remove('dark-bgc');
    });
}

function startGame() {
    createGrid(gridSize);
    addHover();
}

//function allows user to enter only numbers
input.onkeydown = function (event) {
    if (isNaN(event.key) && event.key !== 'Backspace') {
        event.preventDefault();
    }
};

btn.addEventListener('click', () => {
    //add size limit
    gridSize = parseInt(input.value);
    createGrid(gridSize);
    addHover();
});

clearBtn.addEventListener('click', () => {
    clearGrid();
});

startGame();