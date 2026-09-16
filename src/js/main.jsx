// SCSS
import '../scss/main.scss';

// MDB
import { Ripple, Collapse, initMDB } from 'mdb-ui-kit/js/mdb.es.min.js';

// Font Awesome
import "@fortawesome/fontawesome-free/css/all.min.css";

// Modules
import { NavbarManager } from './modules/dom/navbar';

// React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Components
import Teams from './react/pages/Teams';
import Groups from './react/pages/Groups';
import KnockoutStage from './react/pages/KnockoutStage';
import Stadiums from './react/pages/Stadiums';

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
    const stadiums = document.querySelector('#stadiums-root');

    if (teams) {
      createRoot(teams).render(
        <StrictMode>
          <Teams />
        </StrictMode>
      );
    }

    if (groups) {
      createRoot(groups).render(
        <StrictMode>
          <Groups />
        </StrictMode>
      );
    }

    if (knockoutStage) {
      createRoot(knockoutStage).render(
        <StrictMode>
          <KnockoutStage />
        </StrictMode>
      );
    }

    if (stadiums) {
      createRoot(stadiums).render(
        <StrictMode>
          <Stadiums />
        </StrictMode>
      );
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
