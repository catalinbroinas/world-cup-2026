// SCSS
import '../scss/main.scss';

// MDB
import { Ripple, Collapse, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

// Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

// Modules
import { NavbarManager } from './modules/dom/navbar';

// React
import { createRoot } from 'react-dom/client';

// Components
import Teams from './react/sections/Teams';
import Groups from './react/sections/Groups';
import KnockoutStage from './react/sections/KnockoutStage';

function AppManager() {
  const addEvents = () => {
    const navbar = document.querySelector('#navbar');
    const navbarManager = NavbarManager(navbar);

    navbarManager.initScroll();
  };

  const renderContent = () => {
    const teams = document.querySelector('#teams-root');
    const groups = document.querySelector('#groups-root');
    const knockoutStage = document.querySelector('#knockout-stage-root');

    if (teams) {
      createRoot(teams).render(<Teams />);
    }

    if (groups) {
      createRoot(groups).render(<Groups />);
    }

    if (knockoutStage) {
      createRoot(knockoutStage).render(<KnockoutStage />);
    }
  };

  const initApp = () => {
    initMDB({ Ripple, Collapse });
    addEvents();
    renderContent();
  };

  return { initApp };
}

document.addEventListener('DOMContentLoaded', () => {
  const app = AppManager();
  app.initApp();
});
