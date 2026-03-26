export async function readAddBikeForm(form: HTMLFormElement) {
  const fd = new FormData(form);

  const make: string = String(fd.get('make') ?? '').trim();
  if (!make) throw new Error('Make is required');

  const model: string = String(fd.get('model') ?? '').trim();
  if (!model) throw new Error('Model is required');

  const year: number = Number(fd.get('year') ?? null);
  if (!year) throw new Error('Year is required');

  const odo: number = Number(fd.get('odo') ?? null);
  if (!odo) throw new Error('Odo is required');

  return { make, model, year, odo };
}

export async function readEditBikeForm(form: HTMLFormElement) {
  const fd = new FormData(form);

  const make: string = String(fd.get('make') ?? '').trim();
  if (!make) throw new Error('Make is required');

  const model: string = String(fd.get('model') ?? '').trim();
  if (!model) throw new Error('Model is required');

  const year: number = Number(fd.get('year') ?? null);
  if (!year) throw new Error('Year is required');

  const odo: number = Number(fd.get('odo') ?? null);
  if (!odo) throw new Error('Odo is required');

  return { make, model, year, odo };
}

export async function readLogOdoForm(form: HTMLFormElement) {
  const fd = new FormData(form);

  const odo: number = Number(fd.get('odo') ?? null);
  if (!odo) throw new Error('Odo is required');

  return odo;
}

export async function readLogMaintenanceForm(form: HTMLFormElement) {
  const fd = new FormData(form);

  const odo: number = Number(fd.get('odo') ?? null);
  if (!odo) throw new Error('Odo is required');

  const date: string = String(fd.get('date') ?? '').trim();
  if (!date) throw new Error('Date is required');

  const note: string = String(fd.get('note') ?? '').trim();

  return { odo, date, note };
}

export async function readScheduleMaintenanceForm(form: HTMLFormElement) {
  const fd = new FormData(form);

  const days: number = Number(fd.get('intervaldays') ?? null);
  if (!days) throw new Error('Date is required');

  const odo: number = Number(fd.get('intervalodo') ?? null);
  if (!odo) throw new Error('Odo is required');

  const note: string = String(fd.get('note') ?? '').trim();

  return { days, odo, note };
}

export async function readAddRepairForm(form: HTMLFormElement) {
  const fd = new FormData(form);

  const bike: string = String(fd.get('bike') ?? '').trim();

  const title: string = String(fd.get('repair-title') ?? '').trim();
  if (!title) throw new Error('Title is required');

  const odo: number = Number(fd.get('repair-odo') ?? null);
  if (!odo) throw new Error('Odo is required');

  const note: string = String(fd.get('repair-note') ?? '').trim();

  return { bike, title, odo, note };
}

export async function readUpdateRepairForm(form: HTMLFormElement) {
  const fd = new FormData(form);

  const title: string = String(fd.get('repair-title') ?? '').trim();
  if (!title) throw new Error('Title is required');

  const odo: number = Number(fd.get('repair-odo') ?? null);
  if (!odo) throw new Error('Odo is required');

  const note: string = String(fd.get('repair-note') ?? '').trim();

  return { title, odo, note };
}

export async function readUpdateProfileForm(form: HTMLFormElement) {
  const fd = new FormData(form);

  const username: string = String(fd.get('profile-username') ?? '').trim();
  if (!username) throw new Error('Username is required');

  const name: string = String(fd.get('profile-name') ?? '').trim();
  if (!name) throw new Error('Name is required');

  const email: string = String(fd.get('profile-email') ?? '').trim();
  if (!email) throw new Error('Email is required');

  return { username, name, email };
}

export async function readUpdatePasswordForm(form: HTMLFormElement) {
  const fd = new FormData(form);

  const password: string = String(fd.get('profile-password') ?? '').trim();
  if (!password) throw new Error('Password is required');

  const confirmPassword: string = String(
    fd.get('profile-confirm-password') ?? '',
  ).trim();
  if (!confirmPassword) throw new Error('Confirm password is required');

  return { password, confirmPassword };
}
