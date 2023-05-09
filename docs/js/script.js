"use strict";

// function qs(element) {
//    let newEl = document.querySelector(element);
//    if (newEl) return newEl;
// }
// function qa(element) {
//    let newEl = document.querySelectorAll(element);
//    if (newEl) return newEl;
// }

import {} from "./lazy.js";
import {} from "./menu.js";
import {} from "./spoiler.js";
import {} from "./accordion.js";
import {} from "./animate.js";
// import {} from "./pop-up-video.js";
// import {} from "./pop-up.js";
// import {} from "./slider.js";



const secondSlider = new Swiper('.secondSlider', {
    clickable: true,
    freeMode: true,
    navigation: {
        nextEl: 'slider__arrow-next',
        prevEl: '.slider__arrow-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
            
        },
        993: {
            slidesPerView: 5,
        }
    }
});
const mainSlider = new Swiper('.mainSlider', {
    spaceBetween: 32,
    slidesPerView: 1,
    initialSlide: 0,
    loop: true,
    thumbs: {
        swiper: secondSlider,
    },
    breakpoints: {
        768: {
            initialSlide: 1,
            spaceBetween: 48,
        },
        993: {
            initialSlide: 2,
        }
    }
});