import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["progressBar","content"]

  connect() {
    console.log("This controller is connected")
  }

  showProgress(){
    // https://stackoverflow.com/questions/22675126/what-is-offsetheight-clientheight-scrollheight#22675563
    const docScroll = this.contentTarget.scrollTop;
    const height = this.contentTarget.scrollHeight - this.contentTarget.clientHeight;
    // console.log(`scrollTop = ${this.contentTarget.scrollTop}, scrollHeight = ${this.contentTarget.scrollHeight}, clientHeight = ${this.contentTarget.clientHeight}`)
    const scrolled = (docScroll / height) * 100;
    this.progressBarTarget.style.width = scrolled + "%";
  }


}
