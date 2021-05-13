import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["container"]

  connect() {
    console.log("Checkbox controller is connected")
  }

  selectAll(){
    this.containerTarget.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = true)
  }

  deselectAll(){
    this.containerTarget.querySelectorAll('input[type="checkbox"]').forEach(checkbox => checkbox.checked = false)
  }

}
