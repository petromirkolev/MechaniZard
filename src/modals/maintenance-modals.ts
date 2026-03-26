export const logMaintenanceModal = {
  open() {
    document
      .querySelector('#modal-add-maintenance')
      ?.classList.remove('is-hidden');
  },

  close() {
    document
      .querySelector('#modal-add-maintenance')
      ?.classList.add('is-hidden');
  },
};

export const scheduleMaintenanceModal = {
  open() {
    document
      .querySelector('#modal-schedule-maintenance')
      ?.classList.remove('is-hidden');
  },

  close() {
    document
      .querySelector('#modal-schedule-maintenance')
      ?.classList.add('is-hidden');
  },
};
