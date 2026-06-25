import '../scss/main.scss';

import { Ripple, Collapse, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

import "@fortawesome/fontawesome-free/css/all.min.css";

function MainDomManager() {
    const initApp = () => {
        initMDB({ Ripple, Collapse });
    };

    return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
    const domManager = MainDomManager();
    domManager.initApp();
});
