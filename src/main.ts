import './styles/reset.css';
import './styles/tokens.css';
import './styles/base.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/pages.css';

const menuButton = document.querySelector('[data-testid="btn-mobile-menu"]');
const mobileMenu = document.querySelector('[data-testid="mobile-menu"]');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.contains('is-hidden');
    mobileMenu.classList.toggle('is-hidden');
    menuButton.setAttribute('aria-expanded', String(isHidden));
  });
}

const openers: Record<string, string> = {
  '[data-action="open-add-bike-modal"]': 'modal-add-bike',
  '[data-action="open-add-maintenance-modal"]': 'modal-add-maintenance',
  '[data-action="open-schedule-maintenance-modal"]':
    'modal-schedule-maintenance',
  '[data-action="open-log-maintenance-modal"]': 'modal-log-maintenance',
  '[data-action="open-add-repair-modal"]': 'modal-add-repair',
};

Object.entries(openers).forEach(([selector, modalId]) => {
  document.querySelectorAll(selector).forEach((button) => {
    button.addEventListener('click', () => {
      document.getElementById(modalId)?.classList.remove('is-hidden');
    });
  });
});

document.querySelectorAll('.modal-close').forEach((button) => {
  button.addEventListener('click', () => {
    const modalId = button.getAttribute('data-close-modal');
    if (modalId) {
      document.getElementById(modalId)?.classList.add('is-hidden');
    }
  });
});

document.querySelectorAll('.modal-overlay').forEach((overlay) => {
  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      overlay.classList.add('is-hidden');
    }
  });
});
