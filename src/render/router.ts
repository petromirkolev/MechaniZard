import type { Action } from '../types/action';
import { renderLoginPage } from '../pages/auth/authView';
import { showScreen } from '../utils/show-screen';
import { renderGarageView } from '../pages/garage/garageView';
import {
  renderMaintenanceBikeSelect,
  showCurrent,
  showHistory,
} from '../pages/maintenance/maintenanceView';
import {
  logMaintenanceModal,
  scheduleMaintenanceModal,
} from '../modals/maintenance-modals';

export function initRouter(): void {
  document.addEventListener('click', async (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    const el = target.closest<HTMLElement>('[data-action]');
    if (!el) return;

    // const bikeId = el.dataset.bikeid;

    const action = el.dataset.action as Action;
    if (!action) return;

    console.log(action);

    switch (action) {
      /* Top bar */
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
        break;
      }
      case 'guides-page': {
        showScreen('guides');
        break;
      }
      case 'profile-page': {
        showScreen('profile');
        break;
      }
      case 'logout': {
        showScreen('auth');
        renderLoginPage();
        break;
      }

      /* Maintenance page */
      case 'show-maintenance-current': {
        showCurrent();
        break;
      }
      case 'show-maintenance-history': {
        showHistory();
        break;
      }

      /* Modals */

      /** Log maintenance modal */
      case 'open-log-maintenance-modal': {
        logMaintenanceModal.open();
        break;
      }
      case 'close-log-maintenance-modal': {
        logMaintenanceModal.close();
        break;
      }

      /** Schedule maintenance modal */
      case 'open-schedule-maintenance-modal': {
        scheduleMaintenanceModal.open();
        break;
      }
      case 'close-schedule-maintenance-modal': {
        scheduleMaintenanceModal.close();
        break;
      }
      default:
        break;
    }
  });
}
