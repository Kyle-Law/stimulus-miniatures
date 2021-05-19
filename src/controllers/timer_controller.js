import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["display","dateTimeInput"]
  static timerInterval

  connect() {
    console.log("This controller is connected")
  }

  setInitialValues(){
    // https://stackoverflow.com/a/61082536/12735786
    const now = new Date()
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
    this.dateTimeInputTarget.setAttribute('min',now.toISOString().slice(0,16))
    this.dateTimeInputTarget.setAttribute('value',now.toISOString().slice(0,16))
  }

  start(){
    this.timerInterval = setInterval(() => {
      const now = new Date().getTime()
      const expiry = new Date(this.dateTimeInputTarget.value).getTime()
      const difference = expiry - now

      if (difference >= 0) {
        // Time calculations for days, hours, minutes and seconds. 1s = 1000ms
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        this.displayTarget.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`

      } else {
        clearInterval(this.timerInterval)
        this.displayTarget.textContent = 'EXPIRED'
      }

    },1000)

  }

  stop(){
    clearInterval(this.timerInterval)
    this.displayTarget.textContent = ""
  }

}
