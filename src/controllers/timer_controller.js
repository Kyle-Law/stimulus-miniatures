import { Controller } from "stimulus"

export default class extends Controller {

  connect() {
    console.log("This controller is connected")
  }

  setInitialValues(){
    // https://stackoverflow.com/a/61082536/12735786
  }

  start(){
    // Time calculations for days, hours, minutes and seconds. 1s = 1000ms
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  }

}
