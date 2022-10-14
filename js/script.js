import { Modal } from './modal.js'
import { alertError } from './alert-error.js'
import { calculateIMC, notNumber } from './utils.js'

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')
const data = [
  {
    min: 0,
    max: 18.4,
    info: 'magreza'
  },
  {
    min: 18.5,
    max: 24.9,
    info: 'normal'
  },
  {
    min: 25,
    max: 29.9,
    info: 'sobrepeso'
  },
  {
    min: 30,
    max: 39.9,
    info: 'obesidade'
  },
  {
    min: 40,
    max: 99,
    info: 'obesidade grave'
  }
]

form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value.replace(',', '.')
  const height = inputHeight.value.replace(',', '.')

  const checkWeightorHeight = notNumber(weight) || notNumber(height)

  if (checkWeightorHeight) {
    alertError.open()
    return
  }

  let info
  const result = calculateIMC(weight, height)

  for (let item of data) {
    if (result >= item.min && result <= item.max) {
      info = item.info
    }
  }
  showResultMessange(result, info)
  inputWeight.value = ''
  inputHeight.value = ''
  inputWeight.focus()
}

Modal.closeButton.onclick = () => {
  Modal.close()
  inputWeight.focus()
}

inputWeight.oninput = () => {
  alertError.close()
}

inputHeight.oninput = () => {
  alertError.close()
}

function showResultMessange(result, info) {
  Modal.modalMessange.innerText = `Seu IMC é de ${result}! Significa ${info}`
  Modal.open()
}
