import { dom } from '../../utils/dom';
import { bikes } from '../../data/bikes';
import type { Action } from '../../types/action';
import { showScreen } from '../../utils/show-screen';
import { renderGarageView } from './garageView';
import {
  readAddBikeForm,
  readEditBikeForm,
  readLogOdoForm,
} from '../../utils/forms';
import {
  addBikeModal,
  editBikeModal,
  deleteBikeModal,
  logOdoModal,
} from '../../modals/bike-modals';
import {
  renderMaintenanceBikeSelect,
  renderMaintenanceView,
} from '../maintenance/maintenanceView';

export function initGarageEvents() {
  document.addEventListener('click', async (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    const el = target.closest<HTMLElement>('[data-action]');
    if (!el) return;

    const bikeId = el.dataset.bikeid;

    const action = el.dataset.action as Action;
    if (!action) return;

    if (action === 'open-add-bike-modal') {
      addBikeModal.open();
    }

    if (action === 'add-bike-submit') {
      const form = (dom.addBikeForm as HTMLFormElement) || null;
      const bike = await readAddBikeForm(form);
      const id = String(Math.round(Math.random() * 10));

      bikes.push({ id, ...bike });

      form.reset();
      addBikeModal.close();

      renderGarageView();
    }

    if (action === 'close-add-bike-modal') {
      addBikeModal.close();
    }

    if (action === 'open-edit-bike-modal') {
      const bikeId = el.dataset.bikeid;
      editBikeModal.open(bikeId);
    }

    if (action === 'edit-bike-submit') {
      const form = (dom.editBikeForm as HTMLFormElement) || null;
      const bike = await readEditBikeForm(form);

      editBike(bikeId, bike);

      form.reset();
      editBikeModal.close();
      updateBikeViews(bikeId);
    }

    if (action === 'close-edit-bike-modal') {
      editBikeModal.close();
    }

    if (action === 'open-log-odo-modal') {
      const bikeId = el.dataset.bikeid;
      logOdoModal.open(bikeId);
    }

    if (action === 'log-odo-submit') {
      const form = (dom.logOdoForm as HTMLFormElement) || null;
      const odo = await readLogOdoForm(form);

      logOdo(bikeId, odo);

      form.reset();
      logOdoModal.close();
      updateBikeViews(bikeId);
    }

    if (action === 'close-log-odo-modal') {
      logOdoModal.close();
    }

    if (action === 'open-delete-bike-modal') {
      const bikeId = el.dataset.bikeid;
      deleteBikeModal.open(bikeId);
    }

    if (action === 'confirm-bike-delete') {
      const bikeId = el.dataset.bikeid;

      const index = bikes.findIndex((bike) => bike.id === bikeId);

      bikes.splice(index, 1);

      deleteBikeModal.close();
      showScreen('garage');
      renderGarageView();
    }

    if (action === 'reject-bike-delete') {
      deleteBikeModal.close();
    }

    if (action === 'close-delete-bike-modal') {
      deleteBikeModal.close();
    }

    if (action === 'open-bike-maintenance') {
      showScreen('maintenance');
      renderMaintenanceBikeSelect();
      renderMaintenanceView(bikeId);
    }
  });
}

function editBike(bikeId: string | undefined, data: any) {
  bikes.find((bike) => {
    if (bike.id === bikeId) {
      bike.make = data.make;
      bike.model = data.model;
      bike.year = data.year;
      bike.odo = data.odo;
    }
    return;
  });
}

function logOdo(bikeId: string | undefined, odo: number) {
  bikes.find((bike) => {
    if (bike.id === bikeId) {
      bike.odo = odo;
    }
    return;
  });
}

function updateBikeViews(bikeId: string | undefined) {
  renderGarageView();
  renderMaintenanceView(bikeId);
}
