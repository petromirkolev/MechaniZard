export const addRepairModal = {
  open() {
    document.querySelector('#modal-add-repair')?.classList.remove('is-hidden');
  },

  close() {
    document.querySelector('#modal-add-repair')?.classList.add('is-hidden');
  },
};

export const updateRepairModal = {
  open() {
    document
      .querySelector('#modal-update-repair')
      ?.classList.remove('is-hidden');
  },

  close() {
    document.querySelector('#modal-update-repair')?.classList.add('is-hidden');
  },
};
