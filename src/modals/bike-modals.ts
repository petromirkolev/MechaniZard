import { bikes } from '../data/bikes';

const editModal = document.getElementById('modal-edit-bike');
if (!editModal) throw new Error('Modal not found');

const odoModal = document.getElementById('modal-log-odo');
if (!odoModal) throw new Error('Modal not found');

export const addBikeModal = {
  open() {
    document.querySelector('#modal-add-bike')?.classList.remove('is-hidden');
  },

  close() {
    document.querySelector('#modal-add-bike')?.classList.add('is-hidden');
  },
};

export const editBikeModal = {
  open(bikeId: string | undefined) {
    const bike = bikes.find((bike) => bike.id === bikeId);
    if (!bike) return;

    const editBtn = document.querySelector<HTMLButtonElement>(
      '[data-action="edit-bike-submit"]',
    );
    if (!editBtn) return;
    editBtn.dataset.bikeid = bikeId;

    const make = document.getElementById(
      'edit-bike-make',
    ) as HTMLInputElement | null;
    const model = document.getElementById(
      'edit-bike-model',
    ) as HTMLInputElement | null;
    const year = document.getElementById(
      'edit-bike-year',
    ) as HTMLInputElement | null;
    const odo = document.getElementById(
      'edit-bike-odometer',
    ) as HTMLInputElement | null;

    if (!make || !model || !year || !odo) return;

    make.value = bike.make;
    model.value = bike.model;
    year.value = String(bike.year);
    odo.value = String(bike.odo);

    editModal.classList.remove('is-hidden');
  },

  close() {
    editModal.classList.add('is-hidden');
  },
};

export const deleteBikeModal = {
  open(bikeId: string | undefined) {
    document.querySelector('#modal-delete-bike')?.classList.remove('is-hidden');
    const deleteBtn = document.querySelector<HTMLButtonElement>(
      '[data-action="confirm-bike-delete"]',
    );
    if (!deleteBtn) return;
    deleteBtn.dataset.bikeid = bikeId;
  },

  close() {
    document.querySelector('#modal-delete-bike')?.classList.add('is-hidden');
  },
};

export const logOdoModal = {
  open(bikeId: string | undefined) {
    odoModal.classList.remove('is-hidden');

    const logOdoButton = document.querySelector<HTMLButtonElement>(
      '[data-action="log-odo-submit"]',
    );
    if (!logOdoButton) return;
    logOdoButton.dataset.bikeid = bikeId;
  },

  close() {
    odoModal.classList.add('is-hidden');
  },
};
