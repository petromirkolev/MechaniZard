import { dom } from '../../utils/dom';
import { bikes } from '../../data/bikes';
import { addRepairModal } from '../../modals/repair-modals';
import type { Action } from '../../types/action';
import { readAddRepairForm } from '../../utils/forms';
import { repairsShowCurrent, repairsShowHistory } from './repairsView';

export function initRepairEvents() {
  document.addEventListener('click', async (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    const el = target.closest<HTMLElement>('[data-action]');
    if (!el) return;

    const action = el.dataset.action as Action;
    if (!action) return;

    if (action === 'open-add-repair-modal') {
      addRepairModal.open();

      const bikeSelect = document.getElementById(
        'repair-bike',
      ) as HTMLSelectElement;

      bikeSelect.innerHTML = '';

      const option = document.createElement('option');

      option.value = '';
      option.innerText = 'Select a bike';

      bikeSelect.appendChild(option);

      bikes.forEach((bike) => {
        const option = document.createElement('option');
        option.value = bike.id;
        option.innerText = `${bike.make} ${bike.model}`;
        bikeSelect.appendChild(option);
      });
    }

    if (action === 'add-repair-submit') {
      const form = (dom.addRepairForm as HTMLFormElement) || null;
      const repair = await readAddRepairForm(form);

      console.log(repair);

      form.reset();
      addRepairModal.close();
    }

    if (action === 'close-add-repair-modal') {
      addRepairModal.close();
    }

    if (action === 'show-repairs-current') {
      repairsShowCurrent();
    }

    if (action === 'show-repairs-history') {
      repairsShowHistory();
    }
  });
}
