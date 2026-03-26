import { addRepairModal } from '../../modals/repair-modals';
import type { Action } from '../../types/action';
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
