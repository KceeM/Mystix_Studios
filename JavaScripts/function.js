document.addEventListener("DOMContentLoaded", function() { 

    setupNavigationButtons();
    highlightActiveButton();


});

//function for navigation buttons    
function setupNavigationButtons() {
    const buttons = [
        { id: 'homeBtn', url: 'index.html' },
        { id: 'servicesBtn', url: 'services.html' },
        { id: 'portfolioBtn', url: 'portfolio.html' },
        { id: 'contactBtn', url: 'contact.html' },
        
    ];
    
    buttons.forEach(button => {
        const btnElement = document.getElementById(button.id);
        if (btnElement) {
            btnElement.addEventListener('click', function() {
                window.location.href = button.url;
                window.location.href = 'services.html#service-animation';
            });
        }
    });
}

function highlightActiveButton() {
    const currentPage = window.location.pathname.split("/").pop();

    const pageMap = {
        "index.html": "homeBtn",
        "services.html": "servicesBtn",
        "portfolio.html": "portfolioBtn",
        "contact.html": "contactBtn"
    };

    const activeBtnId = pageMap[currentPage];
    if (activeBtnId) {
        document.getElementById(activeBtnId)?.classList.add("active");
    }
}
