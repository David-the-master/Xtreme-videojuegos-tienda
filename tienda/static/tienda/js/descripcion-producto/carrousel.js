
  const images = [
    "./imagenes/ps5.webp",
    "./imagenes/nintendo-switch-oled.jpg",
    "./imagenes/nintendo-switch-2.webp",
    "./imagenes/xbox-one-s.webp"
  ];

  let currentIndex = 0;
  const mainImage = document.getElementById("mainImage");

  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    mainImage.src = images[currentIndex];
  }

  function goToSlide(index) {
    currentIndex = index;
    mainImage.src = images[currentIndex];
  }

