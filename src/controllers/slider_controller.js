import { Controller } from "stimulus"

export default class extends Controller {

  static targets=["inputDisplay"]
  static values={input:Number}

  connect() {
    console.log("Slider controller is connected")
  }

  setInput(e){
    this.inputValue = e.target.value
  }

  inputValueChanged(){
    this.inputDisplayTarget.textContent = this.inputValue
  }

}
