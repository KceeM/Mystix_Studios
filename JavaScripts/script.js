document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('#welcome-section, #mission-section, #cta-section');

     // Highlight the current page in the navigation
     const currentLocation = window.location.href;
     const navLinks = document.querySelectorAll('nav ul li a');
     
     navLinks.forEach(link => {
         if (link.href === currentLocation) {
             link.classList.add('active');
         }
     });
    
    function checkVisibility() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            }
        });
    }

    // Check visibility on page load
    checkVisibility();

    // Check visibility on scroll
    window.addEventListener('scroll', checkVisibility);
});

function redirectToService(category) {
    // Redirect to the services page with the specified category section
    window.location.href = 'services.html#' + category;
}