// Función para cambiar el color de fondo
function cambiarColor(event) {
    event.target.style.backgroundColor = 'yellow';
}

// Obtener el elemento por su id
const ele = document.getElementById("ele1");

// Agregar evento click para llamar a la función cambiarColor
ele.addEventListener("click", cambiarColor);