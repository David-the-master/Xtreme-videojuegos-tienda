document.addEventListener('DOMContentLoaded', function () {
  // Función de easing cúbica para efecto más suave
  function easeOutCubic(t) {
    return (--t) * t * t + 1;
  }

  // Función de scroll suave mejorada
  function smoothScrollTo(target) {
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
        if (timeElapsed < duration) requestAnimationFrame(animation);
      }

      requestAnimationFrame(animation);
      return;
    }

    const element = document.querySelector(target);
    if (!element) return;

    const style = window.getComputedStyle(element);
    const scrollMarginTop = parseInt(style.scrollMarginTop) || 0;
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
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    requestAnimationFrame(animation);
  }

  // Enlaces internos con scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = this.getAttribute('href');
      smoothScrollTo(target);
    });
  });

  // Botón volver arriba
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function (e) {
      e.preventDefault();
      smoothScrollTo('#');
    });

    window.addEventListener('scroll', function () {
      backToTopBtn.classList.toggle('active', window.pageYOffset > 300);
    });

    backToTopBtn.classList.toggle('active', window.pageYOffset > 300);
  }
});
