import { Controller } from "stimulus"

export default class extends Controller {
  static targets=["innerBar","progress"]
  static values = {currentProgress:Number}

  connect() {
    console.log("Progress Bar controller is connected")
  }

  start(){
    this.currentProgressValue = 1;
    const progressInterval = setInterval(()=> {
      this.currentProgressValue >= 100 ? clearInterval(progressInterval) : this.currentProgressValue++;
    }, 10);
  }

  currentProgressValueChanged(){
    this.innerBarTarget.style.width = this.currentProgressValue + "%";
    this.progressTarget.textContent = `${this.currentProgressValue}%`
  }


}
