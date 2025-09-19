// Navegación entre categorías de servicios con pequeña animación
document.addEventListener('DOMContentLoaded', function() {
    const categoryButtons = document.querySelectorAll('.categoria-btn');
    const categorySections = document.querySelectorAll('.categoria-servicios');

    // Función para mostrar la sección seleccionada
    function showCategory(categoryId) {
        categorySections.forEach(section => {
            if (section.id === categoryId) {
                section.classList.add('active');
                section.style.display = 'block';
                section.style.opacity = 0;
                setTimeout(() => {
                    section.style.transition = 'opacity 0.4s ease-in-out';
                    section.style.opacity = 1;
                }, 50);
                section.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                section.classList.remove('active');
                section.style.display = 'none';
                section.style.opacity = 0;
            }
        });
    }

    // Evento para cada botón
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Activar botón
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Mostrar sección correspondiente
            const categoryId = button.getAttribute('data-categoria');
            showCategory(categoryId);
        });
    });

    // Inicializar categoría activa por defecto
    const defaultButton = document.querySelector('.categoria-btn.active');
    if (defaultButton) {
        showCategory(defaultButton.getAttribute('data-categoria'));
    }
});
