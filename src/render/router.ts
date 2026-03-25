import { dom } from '../utils/dom';
import type { Action } from '../types/action';
import { renderLoginPage, renderRegisterPage } from '../pages/auth/authView';
import { initGaragePage } from '../pages/garage/garageEvents';
import { showScreen } from '../utils/show-screen';
import {
  readAddBikeForm,
  readEditBikeForm,
  readLogOdoForm,
} from '../utils/forms';
import { addBikeModal } from '../modals/addBikeModal';
import { bikes } from '../data/bikes';
import { logOdoModal } from '../modals/logOdoModal';
import { deleteBikeModal } from '../modals/deleteBikeModal';
import { editBikeModal } from '../modals/editBikeModal';
import { renderGarageView } from '../pages/garage/garageView';

export function initRouter(): void {
  document.addEventListener('click', async (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    const el = target.closest<HTMLElement>('[data-action]');
    if (!el) return;

    const action = el.dataset.action as Action;
    if (!action) return;

    console.log(action);

    switch (action) {
      // Auth
      case 'show-login-form': {
        showScreen('auth');
        renderLoginPage();
        break;
      }
      case 'show-register-form': {
        showScreen('auth');
        renderRegisterPage();
        break;
      }
      case 'login': {
        showScreen('garage');
        renderGarageView();
        break;
      }
      case 'register': {
        showScreen('garage');
        renderGarageView();
        break;
      }
      // Top bar
      case 'garage-page': {
        showScreen('garage');
        renderGarageView();
        break;
      }
      case 'maintenance-page': {
        showScreen('maintenance');
        break;
      }
      case 'logout': {
        showScreen('auth');
        renderLoginPage();
        break;
      }
      // Garage page
      case 'add-bike-submit': {
        const form = (dom.addBikeForm as HTMLFormElement) || null;
        const bike = await readAddBikeForm(form);
        const id = String(Math.round(Math.random() * 10));

        bikes.push({ ...bike, id });

        form.reset();
        addBikeModal.close();

        initGaragePage();
        break;
      }
      case 'edit-bike-submit': {
        const form = (dom.editBikeForm as HTMLFormElement) || null;
        const bike = await readEditBikeForm(form);

        console.log(bike);

        form.reset();
        editBikeModal.close();

        break;
      }
      case 'log-odo-submit': {
        const form = (dom.logOdoForm as HTMLFormElement) || null;
        const bike = await readLogOdoForm(form);

        console.log(bike);

        form.reset();
        logOdoModal.close();

        break;
      }
      case 'confirm-bike-delete': {
        break;
      }
      case 'reject-bike-delete': {
        deleteBikeModal.close();
        break;
      }

      // Maintenance page

      // Modals
      /// Add bike modal
      case 'open-add-bike-modal': {
        addBikeModal.open();
        break;
      }
      case 'close-add-bike-modal': {
        addBikeModal.close();
        break;
      }
      /// Edit bike modal
      case 'open-edit-bike-modal': {
        editBikeModal.open('1');
        break;
      }
      case 'close-edit-bike-modal': {
        editBikeModal.close();
        break;
      }
      /// Log odo modal
      case 'open-log-odo-modal': {
        logOdoModal.open();
        break;
      }
      case 'close-log-odo-modal': {
        logOdoModal.close();
        break;
      }
      /// Delete bike modal
      case 'open-delete-bike-modal': {
        deleteBikeModal.open();
        break;
      }
      case 'close-delete-bike-modal': {
        deleteBikeModal.close();
        break;
      }

      default:
        break;
    }
  });
}
