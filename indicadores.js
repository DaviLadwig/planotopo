
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".counter");

    const animateCounter = (counter) => {
        const target = Number(counter.getAttribute("data-target"));
        const duration = 1800;
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentValue = Math.floor(target * easeOut);

            counter.textContent = currentValue;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        }

        requestAnimationFrame(updateCounter);
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counter = entry.target;

                if (!counter.classList.contains("counted")) {
                    counter.classList.add("counted");
                    animateCounter(counter);
                }

                obs.unobserve(counter);
            }
        });
    }, {
        threshold: 0.6
    });

    counters.forEach((counter) => observer.observe(counter));
});