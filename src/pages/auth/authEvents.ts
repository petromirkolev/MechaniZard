import type { Action } from '../../types/action';
import { showScreen } from '../../utils/show-screen';
import { renderLoginView, renderRegisterView } from './authView';
import { renderGarageView } from '../garage/garageView';

export function initAuthEvents() {
  document.addEventListener('click', async (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    const el = target.closest<HTMLElement>('[data-action]');
    if (!el) return;

    const action = el.dataset.action as Action;
    if (!action) return;

    if (action === 'show-login-form') {
      showScreen('auth');
      renderLoginView();
    }
    if (action === 'show-register-form') {
      showScreen('auth');
      renderRegisterView();
    }
    if (action === 'login') {
      showScreen('garage');
      renderGarageView();
    }
    if (action === 'register') {
      showScreen('garage');
      renderGarageView();
    }
  });
}

export function loginUser() {}

export function registerUser() {}
