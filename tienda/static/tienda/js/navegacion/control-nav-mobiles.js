function ajustarEnlaceQuienesSomos() {
  const enlace = document.getElementById('link-quienes');

  if (window.innerWidth <= 560) {
    enlace.setAttribute('href', '#quienes-somos-mobile');
  } else {
    enlace.setAttribute('href', '#quienes-somos');
  }
}

// Ejecutar al cargar y al redimensionar
window.addEventListener('DOMContentLoaded', ajustarEnlaceQuienesSomos);
window.addEventListener('resize', ajustarEnlaceQuienesSomos);
