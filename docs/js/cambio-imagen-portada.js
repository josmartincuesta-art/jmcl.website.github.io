// Array con las imágenes y sus descripciones
const contenido = [
    {
        imagen: 'http://localhost:8080/web_copilot/assets/portada/imagen_1.jpeg',
        descripcion: 'Jugando con creaciones. Practicando por libre, etc.'
    },
    {
        imagen: 'http://localhost:8080/web_copilot/assets/portada/imagen_2.jpeg',
        descripcion: 'La IA y la foto fija. Esbozos improvisados.'
    },
    {
        imagen: 'http://localhost:8080/web_copilot/assets/portada/imagen_3.jpeg',
        descripcion: 'La IA y los vídeos. Una aproximación. Todo en 5 seg.'
    },
        {
        imagen: 'http://localhost:8080/web_copilot/assets/portada/imagen_4.jpeg',
        descripcion: 'La IA y los vídeos. Una aproximación. Todo en 5 seg.'
    },
    {
        imagen: 'http://localhost:8080/web_copilot/assets/portada/imagen_5.jpeg',
        descripcion: 'La IA y la foto fija. Creaciones por doquier. Esbozos improvisados. '
    }
];

// Función para elegir un elemento aleatorio del array
function elegirElementoAleatorio(array) {
    const indice = Math.floor(Math.random() * array.length);
    return array[indice];
}

// Cuando el DOM esté completamente cargado...
document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar los elementos del DOM
    const imagenElemento = document.getElementById('imagen-dinamica');
    const descripcionElemento = document.getElementById('descripcion-dinamica');

    // Elegir un objeto de contenido al azar
    const contenidoAleatorio = elegirElementoAleatorio(contenido);

    // Actualizar la imagen y la descripción
    imagenElemento.src = contenidoAleatorio.imagen;
    descripcionElemento.textContent = contenidoAleatorio.descripcion;
});
