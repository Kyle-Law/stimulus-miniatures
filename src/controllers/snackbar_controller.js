import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["snackbar"]

  connect() {
    console.log("This controller is connected")
  }

  show(){
    this.snackbarTarget.classList.add("show");

    // After 2.9s(when it's faded out), remove show class
    setTimeout(() => {
      this.snackbarTarget.classList.remove('show')
    }, 2900);
  }

}
