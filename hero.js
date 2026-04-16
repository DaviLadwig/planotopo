
document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".hero-slide");
    const prevBtn = document.getElementById("heroSliderPrev");
    const nextBtn = document.getElementById("heroSliderNext");
    const dots = document.querySelectorAll(".hero-slider-dot");

    if (!slides.length) return;

    let current = 0;
    let autoplay;

    function updateSlider() {
        slides.forEach((slide, index) => {
            slide.classList.toggle("active", index === current);
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === current);
        });
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        updateSlider();
    }

    function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function startAutoplay() {
        autoplay = setInterval(nextSlide, 4500);
    }

    function resetAutoplay() {
        clearInterval(autoplay);
        startAutoplay();
    }

    if (nextBtn) {
        nextBtn.addEventListener("click", function () {
            nextSlide();
            resetAutoplay();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener("click", function () {
            prevSlide();
            resetAutoplay();
        });
    }

    dots.forEach((dot) => {
        dot.addEventListener("click", function () {
            current = Number(dot.dataset.slide);
            updateSlider();
            resetAutoplay();
        });
    });

    updateSlider();
    startAutoplay();
});
