const container = document.querySelector('.container');
container.classList.add('square');

function highlightDiv(event) {
    this.classList.add('highlight');
}

// adding a 16x16 grid of divs into the DOM
for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row');

    for (let j = 0; j < 16; j++) {
        const div = document.createElement('div');
        row.appendChild(div);
        div.classList.add('square');
    }

    container.appendChild(row);
}

const tiles = document.querySelectorAll('.row > div');
tiles.forEach(div => div.addEventListener('mouseleave', highlightDiv));