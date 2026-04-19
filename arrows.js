document.addEventListener("DOMContentLoaded", function () {
    const track = document.getElementById("testimonialsTrack");
    const prevBtn = document.getElementById("testimonialPrev");
    const nextBtn = document.getElementById("testimonialNext");
    const cards = document.querySelectorAll(".testimonial-card");

    if (!track || !cards.length) return;

    let currentIndex = 0;

    function getCardsPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1100) return 2;
        return 3;
    }

    function updateSlider() {
        const cardsPerView = getCardsPerView();
        const maxIndex = Math.max(0, cards.length - cardsPerView);

        if (currentIndex > maxIndex) {
            currentIndex = maxIndex;
        }

        const cardWidth = cards[0].offsetWidth;
        const gap = 24;
        const moveX = currentIndex * (cardWidth + gap);

        track.style.transform = `translateX(-${moveX}px)`;
    }

    nextBtn.addEventListener("click", function () {
        const cardsPerView = getCardsPerView();
        const maxIndex = Math.max(0, cards.length - cardsPerView);

        if (currentIndex < maxIndex) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }

        updateSlider();
    });

    prevBtn.addEventListener("click", function () {
        const cardsPerView = getCardsPerView();
        const maxIndex = Math.max(0, cards.length - cardsPerView);

        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = maxIndex;
        }

        updateSlider();
    });

    window.addEventListener("resize", updateSlider);

    updateSlider();
});
