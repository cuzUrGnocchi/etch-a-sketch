const container = document.querySelector('.container');
container.classList.add('square');

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