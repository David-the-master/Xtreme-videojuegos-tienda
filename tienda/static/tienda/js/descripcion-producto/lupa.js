document.addEventListener("DOMContentLoaded", function () {
  const mainImage = document.getElementById('mainImage');
  const zoomLens = document.getElementById('zoomLens');
  const wrapper = document.querySelector('.image-wrapper');
  const thumbnails = document.querySelectorAll('.thumbnail');

  let zoomActivo = false;

  // Activar o desactivar zoom con clic (evita flechas)
  wrapper.addEventListener('click', function (e) {
    if (e.target.closest('button.arrow')) return; // ← Ignora clics en flechas

    zoomActivo = !zoomActivo;

    if (zoomActivo) {
      zoomLens.style.display = 'block';
      wrapper.style.cursor = 'zoom-out';
    } else {
      zoomLens.style.display = 'none';
      wrapper.style.cursor = 'zoom-in';
    }
  });

  // Mostrar lente de zoom si está activo
  wrapper.addEventListener('mousemove', function (e) {
    if (!zoomActivo) return;

    const rect = wrapper.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const lensWidth = zoomLens.offsetWidth;
    const lensHeight = zoomLens.offsetHeight;

    let left = x - lensWidth / 2;
    let top = y - lensHeight / 2;

    left = Math.max(0, Math.min(left, wrapper.offsetWidth - lensWidth));
    top = Math.max(0, Math.min(top, wrapper.offsetHeight - lensHeight));

    zoomLens.style.left = `${left}px`;
    zoomLens.style.top = `${top}px`;

    zoomLens.style.backgroundImage = `url('${mainImage.src}')`;
    zoomLens.style.backgroundSize = `${mainImage.width * 2}px ${mainImage.height * 2}px`;
    zoomLens.style.backgroundPosition = `-${x * 2 - lensWidth / 2}px -${y * 2 - lensHeight / 2}px`;
  });

  wrapper.addEventListener('mouseleave', function () {
    if (zoomActivo) {
      zoomLens.style.display = 'none';
    }
  });

  // Cuando cambia la imagen: actualiza fondo del zoom
  function updateZoomBackground() {
    zoomLens.style.backgroundImage = `url('${mainImage.src}')`;
  }

  // Carousel: imágenes desde thumbnails
  let imageSources = [];
  let currentIndex = 0;

  thumbnails.forEach((thumb) => {
    imageSources.push(thumb.src);
  });

  window.changeSlide = function (direction) {
    currentIndex = (currentIndex + direction + imageSources.length) % imageSources.length;
    mainImage.src = imageSources[currentIndex];
    updateZoomBackground();

    thumbnails.forEach(t => t.classList.remove('active-thumbnail'));
    thumbnails[currentIndex].classList.add('active-thumbnail');
  }

  window.changeImage = function (element) {
    mainImage.src = element.src;
    currentIndex = imageSources.indexOf(element.src);
    updateZoomBackground();

    thumbnails.forEach(t => t.classList.remove('active-thumbnail'));
    element.classList.add('active-thumbnail');
  }
});