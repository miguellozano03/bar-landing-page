// Funcionalidad del header responsive
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    const hamburger = document.getElementById('hamburger');
    const navbar = document.getElementById('navbar');

    // Tu script original mejorado
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
    });

    // Funcionalidad del menú hamburguesa
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navbar.classList.toggle('active');
        
        // Prevenir scroll del body cuando el menú está abierto
        if (navbar.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });

    // Cerrar menú cuando se hace click en un enlace
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
            document.body.style.overflow = 'auto';
        });
    });

    // Cerrar menú cuando se hace click fuera de él
    document.addEventListener('click', function(event) {
        if (!navbar.contains(event.target) && !hamburger.contains(event.target)) {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Manejar el redimensionamiento de la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navbar.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });

    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Función para lazy loading de imágenes
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// Inicializar lazy loading cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lazyLoadImages);
} else {
    lazyLoadImages();
}