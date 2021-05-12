import { Controller } from "stimulus"

export default class extends Controller {
  static values={expiry:Number}
  static targets=["dateTimeInput","display"]

  connect() {
    console.log("Timer controller is connected")
    this.setMinDate()
  }

  setMinDate(){
    // https://stackoverflow.com/a/61082536/12735786
    const now = new Date()
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
    this.dateTimeInputTarget.setAttribute('min',now.toISOString().slice(0,16))
  }

  start(){
    this.expiryValue = new Date(this.dateTimeInputTarget.value).getTime()
    // Update the count down every 1 second
    const timerInterval = setInterval(() => {

      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const difference = this.expiryValue - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      this.displayTarget.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

      // If the count down is over, write some text
      if (difference < 0) {
        clearInterval(timerInterval);
        this.displayTarget.innerHTML = "EXPIRED";
      }
    }, 1000);
  }

}
