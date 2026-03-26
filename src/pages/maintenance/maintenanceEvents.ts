import { dom } from '../../utils/dom';
import type { Action } from '../../types/action';
import {
  logMaintenanceModal,
  scheduleMaintenanceModal,
} from '../../modals/maintenance-modals';
import {
  renderMaintenanceView,
  showMaintenanceCurrent,
  showMaintenanceHistory,
} from './maintenanceView';
import {
  readLogMaintenanceForm,
  readScheduleMaintenanceForm,
} from '../../utils/forms';

export function initMaintenanceEvents() {
  document.addEventListener('click', async (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    const el = target.closest<HTMLElement>('[data-action]');
    if (!el) return;

    const bikeId = el.dataset.id;

    const action = el.dataset.action as Action;
    if (!action) return;

    if (action === 'open-log-maintenance-modal') {
      logMaintenanceModal.open();
    }

    if (action === 'add-log-submit') {
      const form = (dom.logMaintenanceForm as HTMLFormElement) || null;
      const log = await readLogMaintenanceForm(form);

      console.log(log);

      form.reset();
      logMaintenanceModal.close();
      renderMaintenanceView(bikeId);
    }

    if (action === 'close-log-maintenance-modal') {
      logMaintenanceModal.close();
    }

    if (action === 'open-schedule-maintenance-modal') {
      scheduleMaintenanceModal.open();
    }

    if (action === 'add-schedule-submit') {
      const form = (dom.scheduleMaintenanceForm as HTMLFormElement) || null;
      const schedule = await readScheduleMaintenanceForm(form);

      console.log(schedule);

      form.reset();
      scheduleMaintenanceModal.close();
      renderMaintenanceView(bikeId);
    }

    if (action === 'close-schedule-maintenance-modal') {
      scheduleMaintenanceModal.close();
    }

    if (action === 'show-maintenance-current') {
      showMaintenanceCurrent();
    }

    if (action === 'show-maintenance-history') {
      showMaintenanceHistory();
    }
  });
}
