document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

document.querySelectorAll('.scroll-image').forEach(image => {
    image.addEventListener('click', () => {
        image.scrollIntoView({ behavior: 'smooth', inline: 'center' });
    });
});
