import { dom } from '../../utils/dom';
import type { Action } from '../../types/action';
import {
  readUpdatePasswordForm,
  readUpdateProfileForm,
} from '../../utils/forms';

export function initProfileEvents() {
  document.addEventListener('click', async (e: MouseEvent) => {
    const target = e.target as HTMLElement;

    const el = target.closest<HTMLElement>('[data-action]');
    if (!el) return;

    const action = el.dataset.action as Action;
    if (!action) return;

    console.log(action);

    if (action === 'update-profile') {
      const form = (dom.updateProfileForm as HTMLFormElement) || null;
      const data = await readUpdateProfileForm(form);

      console.log(data);

      form.reset();
    }

    if (action === 'update-password') {
      const form = (dom.changePasswordForm as HTMLFormElement) || null;
      const data = await readUpdatePasswordForm(form);

      console.log(data);

      form.reset();
    }
  });
}
