document.addEventListener('DOMContentLoaded', function () {
  const productos = document.querySelectorAll(".producto-card");
  const productosGrid = document.querySelector('.productos-grid');

  function filtrarProductos(filtroActivo) {
    let hayProductosVisibles = false;

    productos.forEach(producto => {
      const clases = Array.from(producto.classList);
      const perteneceCategoria = clases.includes(filtroActivo);

      if (filtroActivo === 'todos' || perteneceCategoria) {
        producto.style.display = 'block';
        hayProductosVisibles = true;
      } else {
        producto.style.display = 'none';
      }
    });

    // Quitar mensaje anterior si existe
    const mensajeAnterior = document.getElementById('no-results-msg');
    if (mensajeAnterior) {
      productosGrid.removeChild(mensajeAnterior);
    }

    if (!hayProductosVisibles) {
      const mensaje = document.createElement('p');
      mensaje.id = 'no-results-msg';
      mensaje.textContent = 'No se encontraron productos en esta categoría.';
      mensaje.style.textAlign = 'center';
      mensaje.style.gridColumn = '1 / -1';
      mensaje.style.color = '#fff';
      mensaje.style.padding = '30px';
      productosGrid.appendChild(mensaje);
    }
  }

  // Al cargar la página, revisar la URL o sessionStorage
  const urlParams = new URLSearchParams(window.location.search);
  const categoriaURL = urlParams.get("categoria");
  const filtroTemporal = sessionStorage.getItem("filtroTemporal");
  sessionStorage.removeItem("filtroTemporal");

  if (filtroTemporal) {
    setTimeout(() => filtrarProductos(filtroTemporal), 50);
  } else if (categoriaURL) {
    filtrarProductos(categoriaURL);
  } else {
    filtrarProductos('todos');
  }
});
