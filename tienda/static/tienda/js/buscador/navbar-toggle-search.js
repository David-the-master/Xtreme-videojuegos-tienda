document.addEventListener("DOMContentLoaded", () => {
  // --- ELEMENTOS ---
  const toggleSearch = document.getElementById("toggleSearch");         // ícono de lupa (desktop)
  const floatingSearch = document.getElementById("floatingSearch");     // contenedor barra flotante (desktop)
  const closeSearch = document.getElementById("closeSearch");           // botón cerrar "×"
  const inputSearch = document.getElementById("floatingSearchInput");   // input desktop
  const inputSearchMobile = document.getElementById("floatingSearchInputMobile"); // input mobile
  const searchBtnMobile = document.getElementById("floatingSearchBtnMobile");     // botón buscar mobile

  // --- FUNCIONES ---
  function redirigirBusqueda(query) {
    if (query !== "") {
      window.location.href = `/productos/?search=${encodeURIComponent(query)}`;
    }
  }

  // --- DESKTOP: Abrir/Cerrar barra flotante ---
  if (toggleSearch && floatingSearch) {
    toggleSearch.addEventListener("click", () => {
      const isVisible = floatingSearch.style.display === "block";
      floatingSearch.style.display = isVisible ? "none" : "block";
      if (!isVisible) inputSearch?.focus();
    });
  }

  if (closeSearch && floatingSearch) {
    closeSearch.addEventListener("click", () => {
      floatingSearch.style.display = "none";
    });
  }

  // Cerrar con ESC
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && floatingSearch.style.display === "block") {
      floatingSearch.style.display = "none";
    }
  });

  // --- DESKTOP: Buscar al presionar Enter ---
  if (inputSearch) {
    inputSearch.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        const query = inputSearch.value.trim().toLowerCase();
        redirigirBusqueda(query);
      }
    });
  }

  // --- MOBILE: Buscar al presionar Enter ---
  if (inputSearchMobile) {
    inputSearchMobile.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        const query = inputSearchMobile.value.trim().toLowerCase();
        redirigirBusqueda(query);
      }
    });
  }

  // --- MOBILE: Buscar al hacer clic en el botón ---
  if (searchBtnMobile) {
    searchBtnMobile.addEventListener("click", function () {
      const query = inputSearchMobile.value.trim().toLowerCase();
      redirigirBusqueda(query);
    });
  }
});
