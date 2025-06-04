// Attendre que le DOM soit complètement chargé
document.addEventListener('DOMContentLoaded', function() {
    // Éléments du DOM
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Fonction pour basculer le menu mobile
    function toggleMenu() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    }

    // Ajouter l'écouteur d'événement au bouton de menu
    if (navToggle) {
        navToggle.addEventListener('click', toggleMenu);
    }

    // Fermer le menu lorsqu'un lien est cliqué
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Changer le style du header au défilement
    function scrollHeader() {
        if (window.scrollY > 50) {
            header.style.boxShadow = 'var(--shadow)';
            header.style.padding = '0.5rem 0';
        } else {
            header.style.boxShadow = 'none';
            header.style.padding = '1rem 0';
        }
    }

    // Ajouter l'écouteur d'événement pour le défilement
    window.addEventListener('scroll', scrollHeader);

    // Animation des sections au défilement
    function animateSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('fade-in-up');
            }
        });
    }

    // Appeler la fonction une fois au chargement
    animateSections();

    // Ajouter l'écouteur d'événement pour le défilement
    window.addEventListener('scroll', animateSections);

    // Effet de parallax pour le fond du hero
    const heroBackground = document.querySelector('.hero-background');
    
    function parallaxEffect() {
        if (heroBackground) {
            const scrollPosition = window.scrollY;
            heroBackground.style.transform = `translateY(${scrollPosition * 0.4}px)`;
        }
    }

    // Ajouter l'écouteur d'événement pour le défilement
    window.addEventListener('scroll', parallaxEffect);

    // Gestion du formulaire de contact
    const contactForm = document.querySelector('.form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simuler l'envoi du formulaire
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Envoi en cours...';
            submitButton.disabled = true;
            
            // Simuler un délai d'envoi
            setTimeout(() => {
                alert('Merci pour votre message ! Nous vous contacterons bientôt.');
                contactForm.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 1500);
        });
    }
});

