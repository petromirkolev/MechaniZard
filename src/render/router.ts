import type { Action } from '../types/action';
import { showScreen } from '../utils/show-screen';
import { renderLoginView } from '../pages/auth/authView';
import { renderGarageView } from '../pages/garage/garageView';
import { renderMaintenanceBikeSelect } from '../pages/maintenance/maintenanceView';

export function initRouter(): void {
  document.addEventListener('click', async (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    const el = target.closest<HTMLElement>('[data-action]');
    if (!el) return;

    const action = el.dataset.action as Action;
    if (!action) return;

    switch (action) {
      case 'garage-page': {
        showScreen('garage');
        renderGarageView();
        break;
      }
      case 'maintenance-page': {
        showScreen('maintenance');
        renderMaintenanceBikeSelect();
        break;
      }
      case 'repairs-page': {
        showScreen('repairs');
        // renderRepairsView();
        break;
      }
      case 'guides-page': {
        showScreen('guides');
        // renderGuidesView();

        break;
      }
      case 'profile-page': {
        showScreen('profile');
        // renderProfileView();
        break;
      }
      case 'logout': {
        showScreen('auth');
        renderLoginView();
        break;
      }
      default:
        break;
    }
  });
}
