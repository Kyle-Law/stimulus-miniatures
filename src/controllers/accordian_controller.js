import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["icon", "details"];
  static classes = ["rotate"];

  connect() {
    console.log("Accordian controller is connected!");
  }

  toggle() {
    this.iconTarget.classList.toggle(this.rotateClass);
    if (this.detailsTarget.style.maxHeight) {
      this.detailsTarget.style.maxHeight = null;
    } else {
      this.detailsTarget.style.maxHeight =
        this.detailsTarget.scrollHeight + "px";
    }
  }
}
