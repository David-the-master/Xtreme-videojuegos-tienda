// Cambiar imagen principal al hacer clic en miniaturas
function changeImage(element) {
  document.getElementById('mainImage').src = element.src;

  // Remover clase active de todas las miniaturas
  const thumbnails = document.querySelectorAll('.thumbnail');
  thumbnails.forEach(thumb => thumb.classList.remove('active-thumbnail'));

  // Agregar clase active a la miniatura clickeada
  element.classList.add('active-thumbnail');
}

// Sistema de pestañas (para escritorio y tablet)
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.getAttribute('data-tab');
    const content = document.getElementById(tabId);

    // Comportamiento clásico tipo pestañas (solo una activa)
    document.querySelector('.tab-btn.active')?.classList.remove('active');
    document.querySelector('.tab-content.active')?.classList.remove('active');

    btn.classList.add('active');
    content.classList.add('active');
  });
});

// Acordeón exclusivo para móviles
document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth <= 480) {
    const accordionToggles = document.querySelectorAll('.accordion-toggle');

    accordionToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        const isActive = toggle.classList.contains('active');

        // Cerrar todos
        document.querySelectorAll('.accordion-toggle').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.accordion-content').forEach(sec => sec.classList.remove('active'));

        // Reabrir el clickeado si estaba cerrado
        if (!isActive) {
          toggle.classList.add('active');
          content.classList.add('active');
        }
      });
    });
  }
});

// Sistema de variantes
const variantBtns = document.querySelectorAll('.variant-btn');
variantBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remover active de todos los botones
    document.querySelector('.variant-btn.active')?.classList.remove('active');

    // Agregar active al botón clickeado
    btn.classList.add('active');

    // Actualizar precio (simulación)
    const price = btn.getAttribute('data-price');
    document.querySelector('.current-price').textContent = `$${parseInt(price).toLocaleString()}`;
  });
});
