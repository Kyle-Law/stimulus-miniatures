import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["toCopy","copyBtn"]

  connect() {
    console.log("Clipboard controller is connected")
  }

  copy() {
    this.toCopyTarget.select()
    document.execCommand("copy")
    // alert(`text copied: ${this.toCopyTarget.value}`)
    // this.copyBtnTarget.textContent = "Copied!"
    // setTimeout(()=>{this.copyBtnTarget.textContent = "Copy to clipboard"},2000)
  }

}
