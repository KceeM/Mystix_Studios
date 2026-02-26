document.addEventListener("DOMContentLoaded", function() { 

    setupNavigationButtons();


});

//function for navigation buttons    
function setupNavigationButtons() {
    const buttons = [
        { id: 'homeBtn', url: 'index.html' },
        { id: 'servicesBtn', url: 'Services.html' },
        { id: 'portfolioBtn', url: 'Portfolio.html' },
        { id: 'cotactBtn', url: 'Contact.html' },
        
    ];
    
    buttons.forEach(button => {
        const btnElement = document.getElementById(button.id);
        if (btnElement) {
            btnElement.addEventListener('click', function() {
                window.location.href = button.url;
            });
        }
    });
}
