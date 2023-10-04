const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

setInterval(() => {
  let date = new Date()
  let dhoras = date.getHours()
  let dminutos = date.getMinutes()
  let dsegundos = date.getSeconds()

  horas.innerHTML = `${formatTime(dhoras)}`
  minutos.innerHTML = `${formatTime(dminutos)}`
  segundos.innerHTML = `${formatTime(dsegundos)}`

}, 1000)

function formatTime(time) {
  return time < 10 ? '0' + time : time
}