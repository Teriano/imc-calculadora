export const alertError = {
  element: document.querySelector('.alert-wrapper'),
  open() {
    alertError.element.classList.add('open')
  },
  close() {
    alertError.element.classList.remove('open')
  }
}
