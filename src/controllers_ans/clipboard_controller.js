import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["toCopy","copyBtn","tooltip"]

  connect() {
    console.log("Clipboard controller is connected")
  }

  copy() {
    if (['INPUT','TEXTAREA'].includes(this.toCopyTarget.tagName)){
      this.toCopyTarget.select()
      document.execCommand("copy")
    } else {
      // Reference: https://learnersbucket.com/examples/javascript/how-to-copy-to-clipboard-with-javascript/
      const input = document.createElement('input')
      input.value = this.toCopyTarget.textContent
      this.toCopyTarget.appendChild(input)
      input.select()
      document.execCommand("copy")
      this.toCopyTarget.removeChild(input)
    }
    if (this.hasTooltipTarget){
      this.tooltipTarget.textContent = 'Copied!'
      setTimeout(() => {
        this.tooltipTarget.textContent = 'Copy to clipboard'
      },3000)
    }
    // alert(`text copied: ${this.toCopyTarget.value}`)
    // this.copyBtnTarget.textContent = "Copied!"
    // setTimeout(()=>{this.copyBtnTarget.textContent = "Copy to clipboard"},2000)
  }

}
