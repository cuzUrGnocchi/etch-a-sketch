const INITIAL_GRID_SIZE = 16; 
const body = document.querySelector('body');
const button = document.querySelector('button');

generateGrid(INITIAL_GRID_SIZE);
button.addEventListener('click', generateGrid);

function highlightDiv() {
    if (!this.classList.contains('paint')) {
        this.classList.add('highlight');
    }
}

function paintDiv() {
    const currentColor = window.getComputedStyle(this).backgroundColor.match(/\d[^\)]*/)[0].replace(' ', '');
    let baseColor = this.dataset.baseColor;
    let colorToApply; 

    if (!baseColor) {
        colorToApply = getRandomColor();
        this.dataset.baseColor = colorToApply;
    } else {
        colorToApply = getDarkerColor(currentColor, baseColor);
    }

    this.style.backgroundColor = 'rgb(' + colorToApply + ')';
}

function generateGrid(size) {
    let grid = document.querySelector('.grid');
    if (grid !== null) grid.remove();
    grid = document.createElement('div');
    grid.classList.add('grid', 'square');
    body.appendChild(grid);
    
    while (typeof size !== 'number') {
        size = prompt('What size?');
    }
    
    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        for (let j = 0; j < size; j++) {
            const div = document.createElement('div');
            row.appendChild(div);
            div.classList.add('square');
            div.setAttribute('data-base-color', '');
        }
        grid.appendChild(row);
        row.classList.add('row');
    }

    const tiles = document.querySelectorAll('.row > div');
    tiles.forEach(div => {
        div.addEventListener('mouseleave', paintDiv);
    });
}

function getDarkerColor(currentColor, baseColor) {
    const darkerColor = [];
    for (let i = 0; i < 3; i++) { 
        const decrement = +baseColor.split(',')[i] * 0.1;
        darkerColor.push(+currentColor.split(',')[i] - decrement);
    }
    return darkerColor.join(',');
}

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit);
}

function getRandomColor() {
    return getRandomNumber(256) + ',' + getRandomNumber(256) + ',' + getRandomNumber(256);
}