
(function () {
  const header = document.querySelector('.header');
  const icon = document.querySelector('.icon-container');

  icon.onclick = function () {
    header.classList.toggle('menu-open');
   };
})();


  window.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let slideIndex = 0;

    function showSlide(index) {
      if (index < 0) {
        slideIndex = slides.length - 1;
      } else if (index >= slides.length) {
        slideIndex = 0;
      }

      carousel.style.transform = `translateX(-${slideIndex * 100}%)`;
    }

    prevBtn.addEventListener('click', () => {
      showSlide(--slideIndex);
    });

    nextBtn.addEventListener('click', () => {
      showSlide(++slideIndex);
    });

    showSlide(slideIndex); // Show the initial slide
  });

