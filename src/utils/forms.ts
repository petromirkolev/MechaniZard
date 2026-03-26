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
