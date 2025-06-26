document.addEventListener('DOMContentLoaded', () => {
  // Cambiar imagen principal al hacer clic en miniaturas
  function changeImage(element) {
    const mainImg = document.getElementById('mainImage');
    if (mainImg && element?.src) {
      mainImg.src = element.src;

      const thumbnails = document.querySelectorAll('.thumbnail');
      thumbnails.forEach(thumb => thumb.classList.remove('active-thumbnail'));
      element.classList.add('active-thumbnail');
    }
  }

  // Sistema de pestañas (para escritorio y tablet)
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  if (tabBtns.length && tabContents.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tabId = btn.getAttribute('data-tab');
        const content = document.getElementById(tabId);

        document.querySelector('.tab-btn.active')?.classList.remove('active');
        document.querySelector('.tab-content.active')?.classList.remove('active');

        btn.classList.add('active');
        if (content) content.classList.add('active');
      });
    });
  }

  // Acordeón exclusivo para móviles
  if (window.innerWidth <= 480) {
    const accordionToggles = document.querySelectorAll('.accordion-toggle');

    if (accordionToggles.length) {
      accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
          const content = toggle.nextElementSibling;
          const isActive = toggle.classList.contains('active');

          document.querySelectorAll('.accordion-toggle').forEach(btn => btn.classList.remove('active'));
          document.querySelectorAll('.accordion-content').forEach(sec => sec.classList.remove('active'));

          if (!isActive && content) {
            toggle.classList.add('active');
            content.classList.add('active');
          }
        });
      });
    }
  }

  // Sistema de variantes
  const variantBtns = document.querySelectorAll('.variant-btn');
  const currentPriceElem = document.querySelector('.current-price');

  if (variantBtns.length && currentPriceElem) {
    variantBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('.variant-btn.active')?.classList.remove('active');
        btn.classList.add('active');

        const price = btn.getAttribute('data-price');
        if (price) {
          currentPriceElem.textContent = `$${parseInt(price).toLocaleString('es-CO')}`;
        }
      });
    });
  }

  // Exportar globalmente si otros scripts lo usan
  window.changeImage = changeImage;
});
