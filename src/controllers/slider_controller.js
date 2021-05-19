import { Controller } from "stimulus"

export default class extends Controller {

  static targets=["display"]
  static values={input:Number}

  connect() {
    console.log("Slider controller is connected")
  }

  setInput(e){
    this.inputValue = e.currentTarget.value
  }

  inputValueChanged(){
    this.displayTarget.textContent = this.inputValue
  }

}
