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
