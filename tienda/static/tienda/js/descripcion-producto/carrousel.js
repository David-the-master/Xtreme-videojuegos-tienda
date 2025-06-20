const thumbnails = document.querySelectorAll('.thumbnail');
const mainImage = document.getElementById('mainImage');
let currentIndex = 0;
let imageSources = [];

// Rellenar imageSources con las imágenes visibles (orden correcto)
thumbnails.forEach((thumb) => {
  imageSources.push(thumb.src);
});

// Botones de navegación izquierda/derecha
function changeSlide(direction) {
  currentIndex = (currentIndex + direction + imageSources.length) % imageSources.length;
  mainImage.src = imageSources[currentIndex];

  // Actualizar miniatura activa
  thumbnails.forEach(t => t.classList.remove('active-thumbnail'));
  thumbnails[currentIndex].classList.add('active-thumbnail');
}

// Clic directo en una miniatura
function changeImage(element) {
  mainImage.src = element.src;
  currentIndex = imageSources.indexOf(element.src);

  thumbnails.forEach(t => t.classList.remove('active-thumbnail'));
  element.classList.add('active-thumbnail');
}
