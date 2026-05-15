'use strict';

// JSON data file
import { destinations, crew, technology } from './data.json' with { type: "json" };

const nav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');


const openNav = () => {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
}

const closeNav = () => {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
}

navToggle.addEventListener('click', () => {

    const isVisible = nav.getAttribute('data-visible') === 'true';

    if (isVisible) {
        closeNav();
    } else {
        openNav();
    }
})


document.addEventListener('click', (e) => {
    const isVisible = nav.getAttribute("data-visible") === "true";

    if (isVisible && !nav.contains(e.target) && !navToggle.contains(e.target) ) {
        closeNav();
    }

})