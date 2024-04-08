let array = [];

function update() {
    const output = document.getElementById('output');
    output.innerHTML = array.reduce((acc, item, index) => {
        return acc + `${index + 1}. ${item}<br>`;
    }, '');
}

function pushItem() {
    const input = document.getElementById('input').value;
    array.push(input);
    update();
}

function popItem() {
    array.pop();
    update();
}

function shiftItem() {
    array.shift();
    update();
}

function unshiftItem() {
    const input = document.getElementById('input').value;
    array.unshift(input);
    update();
}

function arrMap() {
    const input = document.getElementById('input').value;
    array = array.map(item => input + item);
    update();
}