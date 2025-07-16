// Show Menu
let line = document.querySelector('.navbar .ri-menu-line');
let menu = document.querySelector('.navbar ul');

line.addEventListener('click', () => {
    menu.classList.toggle('showmenu');
});

// Sticky Navbar on Scroll
window.addEventListener('scroll', () => {
    let nav = document.querySelector('.navbar');
    if (scrollY > 50) {
        nav.classList.add('navbarSticky');
    } else {
        nav.classList.remove('navbarSticky');
    }
});

// SERVICE SLIDER
var swiperService = new Swiper('.ServiceSwiper', {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});

// PROJECTS SLIDER
var swiperProjects = new Swiper('.projectSwiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 2
        },

    },
});

//testimonialsSwiper
var swiper = new Swiper('.testimonialsSwiper', {
    slidesPerView: 2,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 1,
        },
        1024: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 4
        },
    },
});

// 
var swiper = new Swiper('.brandSwiper', {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 2000,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4
        },
    },
});

//teamSwiper
var swiper = new Swiper('.teamSwiper', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay:2000,
    },
        breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 2,
        },
        1400: {
            slidesPerView: 3
        },
    },
})