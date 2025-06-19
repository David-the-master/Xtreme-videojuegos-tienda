// Función de scroll suave mejorada
function smoothScrollTo(target) {
  // Caso especial para el botón "volver arriba"
  if (target === "#" || target === "#top") {
    const startPosition = window.pageYOffset;
    const distance = -startPosition;
    const duration = 1000;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const ease = easeOutCubic(progress);
      window.scrollTo(0, startPosition + distance * ease);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
    return;
  }

  // Scroll para secciones normales
  const element = document.querySelector(target);
  if (!element) return;

  // Obtener el valor de scroll-margin-top del elemento
  const style = window.getComputedStyle(element);
  const scrollMarginTop = parseInt(style.scrollMarginTop) || 0;

  // Calcular la posición final considerando el scroll-margin-top
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - scrollMarginTop;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  const duration = 800;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    
    const ease = easeOutCubic(progress);
    window.scrollTo(0, startPosition + distance * ease);
    
    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  // Función de easing cúbica para efecto más suave
  function easeOutCubic(t) {
    return (--t) * t * t + 1;
  }

  requestAnimationFrame(animation);
}

// Aplicar a todos los enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    smoothScrollTo(target);
  });
});

// Configuración del botón "volver arriba"
document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.querySelector('.back-to-top');
  
  if (backToTopBtn) {
    // Scroll suave al hacer click
    backToTopBtn.addEventListener('click', function(e) {
      e.preventDefault();
      smoothScrollTo('#');
    });

    // Mostrar/ocultar botón al hacer scroll
    window.addEventListener('scroll', function() {
      backToTopBtn.classList.toggle('active', window.pageYOffset > 300);
    });

    // Comprobar estado inicial
    backToTopBtn.classList.toggle('active', window.pageYOffset > 300);
  }
});