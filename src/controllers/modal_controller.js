import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["modal","closeBtn"]

  connect() {
    console.log("Modal controller is connected")
  }

  close(e){
    console.log('close modal')
    if (e.target == this.modalTarget || e.target == this.closeBtnTarget) {
      this.modalTarget.style.display = "none";
    }
  }

  open(){
    console.log('open modal')
    this.modalTarget.style.display = "block";
  }

}
