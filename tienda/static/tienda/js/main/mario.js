document.addEventListener('DOMContentLoaded', () => {
    const mushroom = document.querySelector('.mushroom');
    const h1 = document.querySelector('h1');
    
    // Calcula posición horizontal del título
    const h1Position = h1.getBoundingClientRect().left / window.innerWidth;
    
    mushroom.style.animation = `
        mushroomRun 5s infinite linear,
        mushroomJump 5s infinite ${h1Position * 5}s ease-in-out
    `;
});