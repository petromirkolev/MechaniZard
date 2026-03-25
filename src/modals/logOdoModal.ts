const modal = document.getElementById('modal-log-odo');
if (!modal) throw new Error('Modal not found');

export const logOdoModal = {
  open() {
    modal.classList.remove('is-hidden');
  },

  close() {
    modal.classList.add('is-hidden');
  },
};
