import { Controller } from "stimulus"

export default class extends Controller {

  static values={score: String}

  connect() {
    // this.element.textContent = ''
  }

  log(){
    console.log(this.scoreValue)
  }


}
