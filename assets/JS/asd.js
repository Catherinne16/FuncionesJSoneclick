let currentColor = '';
function changeColor(color) {
    const keyDiv = document.getElementById('key');
    keyDiv.style.backgroundColor = color;
    currentColor = color;
}

function createNewDiv(color) {
    const newDiv = document.createElement('div');
    newDiv.style.width = '200px';
    newDiv.style.height = '200px';
    newDiv.style.backgroundColor = color;
    newDiv.style.border = '1px solid black';
    document.body.appendChild(newDiv);
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case 'a':
            changeColor('pink');
            break;
        case 's':
            changeColor('orange');
            break;
        case 'd':
            changeColor('lightblue');
            break;
        case 'q':
            createNewDiv('purple');
            break;
        case 'w':
            createNewDiv('gray');
            break;
        case 'e':
            createNewDiv('brown');
            break;
        default:
            break;
    }
});