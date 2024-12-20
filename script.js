document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    const slideshow = document.querySelector('.slideshow');
    const indicatorsContainer = document.querySelector('.indicators');
    let currentSlide = 0;
    slides.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.dataset.index = index;
        if (index === 0) indicator.classList.add('active');
        indicatorsContainer.appendChild(indicator);
    });
    function showSlide(index) {
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }
        slideshow.style.transform = `translateX(-${100 * currentSlide}vw)`;
        const activeIndicator = indicatorsContainer.querySelector('.active');
        activeIndicator.classList.remove('active');
        indicatorsContainer.children[currentSlide].classList.add('active');
    }
    let autoSlideInterval = setInterval(function () {
        showSlide(currentSlide + 1);
    }, 5000);
    indicatorsContainer.addEventListener('click', function (e) {
        if (e.target && e.target.classList.contains('indicator')) {
            clearInterval(autoSlideInterval);
            showSlide(Number(e.target.dataset.index));
            autoSlideInterval = setInterval(function () {
                showSlide(currentSlide + 1);
            }, 5000);
        }
    });
    showSlide(0);
});
function disableNavLinks() {
    const navLinks = document.querySelector('.mobile-nav-links');
    if (navLinks) {
        navLinks.style.display = 'none';
    }
    const bookSection = document.querySelector('#book-package');
    if (bookSection) {
        bookSection.scrollIntoView({ behavior: 'smooth' });
    }
}
document.addEventListener("input", (event) => {
    if (event.target.tagName === "TEXTAREA") {
        autoResizeTextarea(event.target);
    }
});
function autoResizeTextarea(textarea) {
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
}
function toggleNav() {
    const navLinks = document.querySelector('.mobile-nav-links');
    navLinks.classList.toggle('active');
}
