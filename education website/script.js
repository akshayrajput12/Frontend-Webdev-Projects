// Selecting menu button and navbar
const menuBtn = document.querySelector('#menu-btn');
const navbar = document.querySelector('.header .flex .navbar');

// Toggling menu button icon and navbar visibility on click
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

// Initializing Swiper for the course slider
const courseSwiper = new Swiper('.course-slider', {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
    },
});

// Initializing Swiper for the teachers slider
const teachersSwiper = new Swiper('.teachers-slider', {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
    },
});

// Initializing Swiper for the reviews slider
const reviewsSwiper = new Swiper('.reviews-slider', {
    spaceBetween: 20,
    grabCursor: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
    },
});
