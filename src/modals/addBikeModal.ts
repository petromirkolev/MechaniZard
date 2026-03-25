export const addBikeModal = {
  open() {
    document.querySelector('#modal-add-bike')?.classList.remove('is-hidden');
  },

  close() {
    document.querySelector('#modal-add-bike')?.classList.add('is-hidden');
  },
};
