function createParticles() {
  const footer = document.querySelector('.footer-section');
  if (!footer) return;

  // Contenedor de partículas
  const particlesContainer = document.createElement('div');
  particlesContainer.className = 'particles-container';
  
  // Estilos base del contenedor
  particlesContainer.style.position = 'absolute';
  particlesContainer.style.top = '0';
  particlesContainer.style.left = '0';
  particlesContainer.style.width = '100%';
  particlesContainer.style.height = '100%';
  particlesContainer.style.overflow = 'hidden';
  particlesContainer.style.pointerEvents = 'none';
  particlesContainer.style.zIndex = '1';

  // Crear 30 partículas (ajusta según necesites)
  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Estilos dinámicos
    const size = Math.random() * 6 + 2; // Tamaño entre 2px y 8px
    const posX = Math.random() * 100;
    const posY = Math.random() * 100;
    const duration = Math.random() * 15 + 10; // Duración entre 10s y 25s
    const delay = Math.random() * 5; // Retraso entre 0s y 5s
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${posX}%;
      top: ${posY}%;
      background-color: rgba(255, 255, 255, ${Math.random() * 0.7 + 0.3});
      border-radius: 50%;
      animation: float ${duration}s ease-in-out ${delay}s infinite;
      pointer-events: none;
    `;
    
    particlesContainer.appendChild(particle);
  }

  footer.appendChild(particlesContainer);
}

// CSS para la animación (puedes ponerlo en tu archivo CSS o aquí)
const style = document.createElement('style');
style.textContent = `
  @keyframes float {
    0% { transform: translateY(0) translateX(0); opacity: 1; }
    50% { transform: translateY(-100px) translateX(20px); }
    100% { transform: translateY(-200px) translateX(-20px); opacity: 0; }
  }
`;
document.head.appendChild(style);

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', createParticles);