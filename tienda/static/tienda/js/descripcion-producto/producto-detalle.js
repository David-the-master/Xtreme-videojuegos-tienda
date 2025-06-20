document.querySelectorAll('.variant-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Reemplazar la coma por punto para parseFloat
    const newPrice = parseFloat(btn.dataset.price.replace(',', '.'));
    const oldPriceStr = btn.dataset.oldPrice?.replace(',', '.');
    const oldPrice = oldPriceStr && !isNaN(parseFloat(oldPriceStr)) ? parseFloat(oldPriceStr) : null;

    const sku = btn.dataset.sku || "N/A";
    const nombre = btn.textContent.trim();

    const precioActualElem = document.getElementById('precio-actual');
    const precioAntiguoElem = document.getElementById('precio-antiguo');
    const descuentoElem = document.getElementById('porcentaje-descuento');
    const skuElem = document.getElementById('sku-variante');
    const nombreVarianteElem = document.getElementById('nombre-variante');

    function formatoPesos(valor) {
      return `$${Math.round(valor).toLocaleString('es-CO')}`;
    }

    // Actualizar precio actual
    if (!isNaN(newPrice)) {
      precioActualElem.textContent = formatoPesos(newPrice);
    }

    // Actualizar precio antiguo y descuento si corresponde
    if (oldPrice !== null && !isNaN(oldPrice) && oldPrice > newPrice) {
      precioAntiguoElem.style.display = 'inline';
      precioAntiguoElem.textContent = formatoPesos(oldPrice);

      const porcentaje = Math.round((1 - (newPrice / oldPrice)) * 100);
      descuentoElem.textContent = `${porcentaje}% OFF`;
      descuentoElem.style.display = 'inline';
    } else {
      precioAntiguoElem.style.display = 'none';
      descuentoElem.style.display = 'none';
    }

    // Actualizar SKU y nombre
    if (skuElem) skuElem.textContent = `SKU: ${sku}`;
    if (nombreVarianteElem) nombreVarianteElem.textContent = `Variante: ${nombre}`;

    // Activar visualmente solo el botón seleccionado
    document.querySelectorAll('.variant-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
