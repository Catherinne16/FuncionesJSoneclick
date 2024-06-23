
function changeColorToBlack(event) {
    event.target.style.backgroundColor = 'black';
}

document.getElementById('blueDiv').addEventListener('click', changeColorToBlack);
document.getElementById('redDiv').addEventListener('click', changeColorToBlack);
document.getElementById('greenDiv').addEventListener('click', changeColorToBlack);
document.getElementById('yellowDiv').addEventListener('click', changeColorToBlack);