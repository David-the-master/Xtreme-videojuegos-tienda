
// Cambiar imagen principal al hacer clic en miniaturas
function changeImage(element) {
  document.getElementById('mainImage').src = element.src;
  
  // Remover clase active de todas las miniaturas
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(thumb => thumb.classList.remove('active-thumbnail'));
  
  // Agregar clase active a la miniatura clickeada
  element.classList.add('active-thumbnail');
}

// Sistema de pestañas
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remover active de todos los botones y contenidos
    document.querySelector('.tab-btn.active').classList.remove('active');
    document.querySelector('.tab-content.active').classList.remove('active');
    
    // Agregar active al botón clickeado
    btn.classList.add('active');
    
    // Mostrar el contenido correspondiente
    const tabId = btn.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

// Sistema de variantes
const variantBtns = document.querySelectorAll('.variant-btn');
variantBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remover active de todos los botones
    document.querySelector('.variant-btn.active').classList.remove('active');
    
    // Agregar active al botón clickeado
    btn.classList.add('active');
    
    // Actualizar precio (simulación)
    const price = btn.getAttribute('data-price');
    document.querySelector('.current-price').textContent = `$${parseInt(price).toLocaleString()}`;
  });
});