// Slider de proyectos en el index
document.addEventListener('DOMContentLoaded', function() {
    // Configuración del slider de proyectos
    const projectSlides = document.querySelectorAll('.projects-slide');
    const projectDotsContainer = document.querySelector('.projects-dots');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    let currentSlide = 0;
    
    // Crear dots para el slider de proyectos
    projectSlides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(i);
        });
        projectDotsContainer.appendChild(dot);
    });
    
    const projectDots = document.querySelectorAll('.projects-dots .dot');
    
    // Función para cambiar de slide
    function goToSlide(n) {
        projectSlides[currentSlide].classList.remove('active');
        projectDots[currentSlide].classList.remove('active');
        
        currentSlide = (n + projectSlides.length) % projectSlides.length;
        
        projectSlides[currentSlide].classList.add('active');
        projectDots[currentSlide].classList.add('active');
    }
    
    // Event listeners para botones de navegación
    prevButton.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });
    
    nextButton.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });
    
    // Cambio automático cada 6 segundos
    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 6000);
});