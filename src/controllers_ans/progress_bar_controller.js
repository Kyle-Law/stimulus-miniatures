import { Controller } from "stimulus"

export default class extends Controller {
  static targets=["innerBar","progress"]
  static values = {currentProgress:Number}
  static progressInterval

  connect() {
    console.log("Progress Bar controller is connected")
  }

  start(){
    this.currentProgressValue = 1;
    clearInterval(this.progressInterval)
    this.progressInterval = setInterval(()=> {
      // If clicked again when the progress is running
      console.log('progressing')
      this.currentProgressValue >= 100 ? clearInterval(this.progressInterval) : this.currentProgressValue++;
    }, 10);
  }

  reset(){
    this.currentProgressValue = 0;
    clearInterval(this.progressInterval)
  }

  currentProgressValueChanged(){
    this.innerBarTarget.style.width = this.currentProgressValue + "%";
    this.progressTarget.textContent = `${this.currentProgressValue}%`
  }


}
