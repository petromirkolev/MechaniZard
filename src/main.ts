import './styles/reset.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages.css';

import { initRouter } from './render/router';
import { initAuthEvents } from './pages/auth/authEvents';
import { initGarageEvents } from './pages/garage/garageEvents';
import { initMaintenanceEvents } from './pages/maintenance/maintenanceEvents';
import { initRepairEvents } from './pages/repairs/repairsEvents';
import { renderLoginView } from './pages/auth/authView';

function initMobileMenu(): void {
  const menuButton = document.querySelector('[data-testid="btn-mobile-menu"]');
  const mobileMenu = document.querySelector('[data-testid="mobile-menu"]');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', () => {
      const isHidden = mobileMenu.classList.contains('is-hidden');
      mobileMenu.classList.toggle('is-hidden');
      menuButton.setAttribute('aria-expanded', String(isHidden));
    });
  }
}

function bootstrapApp(): void {
  initRouter();
  initMobileMenu();
  initAuthEvents();
  initGarageEvents();
  initMaintenanceEvents();
  initRepairEvents();
  renderLoginView();
}

bootstrapApp();
