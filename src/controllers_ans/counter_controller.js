import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["display"]

  static values = {score: Number}

  connect() {
    console.log("Counter controller is connected!")
  }

  increase(){
    this.scoreValue++
  }

  decrease(){
    this.scoreValue--
  }

  scoreValueChanged(){
    this.displayTarget.textContent = this.scoreValue
  }
}
