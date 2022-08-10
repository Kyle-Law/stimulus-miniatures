import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["snackbar"]
  static timeout

  connect() {
    console.log("Snackbar controller is connected")
  }

  show() {
    this.snackbarTarget.classList.add('show');
    this.timeout = setTimeout(() => {
      this.removeClass();
    }, 2900);
  }

  removeClass() {
    this.snackbarTarget.classList.remove('show');
    clearTimeout(this.timeout);
  }

}
