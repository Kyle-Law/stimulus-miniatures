import { Controller } from "stimulus"

export default class extends Controller {

  static targets=["display"]
  static values={price:Number}

  connect() {
    console.log("Price controller is connected")
  }

  setPrice(e){
    this.priceValue = e.target.value
  }

  priceValueChanged(){
    this.displayTarget.textContent = this.priceValue
  }

}
