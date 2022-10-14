export const Modal = {
  modalEvent: document.querySelector('.modal-wrapper'),
  modalMessange: document.querySelector('.modal .title span'),
  closeButton: document.querySelector('.modal button.close'),

  open() {
    Modal.modalEvent.classList.add('open')
  },
  close() {
    Modal.modalEvent.classList.remove('open')
  }
}

window.addEventListener('keydown', clickEsc)

function clickEsc(event) {
  if (event.key === 'Escape') {
    Modal.close()
  }
}
