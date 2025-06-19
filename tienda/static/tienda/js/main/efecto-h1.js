document.addEventListener('DOMContentLoaded', function() {
  const title = document.getElementById('hero-title');
  const fullText = title.textContent;
  let i = 0;
  title.textContent = '';

  function typeWriter() {
    if (i < fullText.length) {
      title.textContent += fullText.charAt(i);
      i++;
      setTimeout(typeWriter, 75); // velocidad de la animación
    }
  }

  typeWriter();
});
