setInterval(setClock, 1000) // every one thousand miliseconds we call the function set Clock //

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock() {
  const currentDate = new Date() //gives the exact current time
  const secondsRatio = currentDate.getSeconds() / 60 // we divide by 60 since there are 60 seconds in a minute
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 // the seconds ratio is a percentage of a minute this will allow the minutes hand to gradually move around the clock
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12 // same concept as above. 12 hours are on a clock not 60
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
}

function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360) 
}

setClock()