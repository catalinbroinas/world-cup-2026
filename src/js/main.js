import '../scss/main.scss';

import { Ripple, Collapse, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

import "@fortawesome/fontawesome-free/css/all.min.css";

import { NavbarManager } from './modules/dom/navbar';

function MainDomManager() {
    const addEvents = () => {
        const navbar = document.querySelector('#navbar');
        const navbarManager = NavbarManager(navbar);

        navbarManager.scrollNavbar();
    };

    const initApp = () => {
        initMDB({ Ripple, Collapse });
        addEvents();
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
