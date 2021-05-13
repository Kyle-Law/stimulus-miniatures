import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["snackbar"]
  static timeout

  connect() {
    console.log("Snackbar controller is connected")
  }

  show(){
    // remove previous snackbar
    this.snackbarTarget.classList.remove('show')
    clearTimeout(this.timeout)
    setTimeout(()=>{
      this.snackbarTarget.classList.add("show");

      // After 2.9s(when it's faded out), remove show class
      this.timeout = setTimeout(() => {
        console.log('timing out')
        this.snackbarTarget.classList.remove('show')
      }, 2900);
    },10)


  }

}
