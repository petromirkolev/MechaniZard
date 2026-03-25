export const deleteBikeModal = {
  open() {
    document.querySelector('#modal-delete-bike')?.classList.remove('is-hidden');
  },

  close() {
    document.querySelector('#modal-delete-bike')?.classList.add('is-hidden');
  },
};
