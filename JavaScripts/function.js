document.addEventListener("DOMContentLoaded", function() { 

    setupNavigationButtons();
    highlightActiveButton();
    filterSelection("all");

    const modal = document.getElementById("videoModal");
    const youtubePlayer = document.getElementById("youtubePlayer");
    const modalVideo = document.getElementById("modalVideo");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".portfolio-item").forEach(item => {
      item.addEventListener("click", function() {
          const type = this.getAttribute("data-type");
          const videoSrc = this.getAttribute("data-video");

          if (!videoSrc) return;

          modal.style.display = "flex";

          if (type === "youtube") {
             youtubePlayer.style.display = "block";
             modalVideo.style.display = "none";

             youtubePlayer.src = `https://www.youtube.com/embed/${videoSrc}?autoplay=1&mute=1`;

            } else {
                youtubePlayer.style.display = "none";
                modalVideo.style.display = "block";

                modalVideo.src = videoSrc;
                modalVideo.play();
            }
       });
   });

    closeBtn.addEventListener("click", function() {
      modal.style.display = "none";
      youtubePlayer.src = "";
      modalVideo.pause();
      modalVideo.src = ""; // clears video
   });


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

document.querySelectorAll(".media-thumbs img").forEach(thumb => {
    thumb.addEventListener("click", function() {
        const mainImage = this.closest(".service-media").querySelector(".media-main img");
        mainImage.src = this.src;
    });
});

function filterSelection(category) {
    let items = document.querySelectorAll('.portfolio-item');

    items.forEach(item => {
        if (category === "all" || item.classList.contains(category)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}


