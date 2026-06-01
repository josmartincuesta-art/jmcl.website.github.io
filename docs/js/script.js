// Carrusel táctil opcional
const carrusel = document.querySelector('.carrusel-container');
let isDown = false;
let startX;
let scrollLeft;

carrusel.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - carrusel.offsetLeft;
  scrollLeft = carrusel.scrollLeft;
});

carrusel.addEventListener('mouseleave', () => {
  isDown = false;
});

carrusel.addEventListener('mouseup', () => {
  isDown = false;
});

carrusel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carrusel.offsetLeft;
  const walk = (x - startX) * 2;
  carrusel.scrollLeft = scrollLeft - walk;
});