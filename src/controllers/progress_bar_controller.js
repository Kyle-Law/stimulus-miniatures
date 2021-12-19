import { Controller } from "stimulus"

export default class extends Controller {
  static targets=["innerBar","progress"]
  static values = {currentProgress:Number}
  static timerInterval

  connect() {
    console.log("Progress Bar controller is connected")
  }

  start(){
    this.reset()
    this.timerInterval = setInterval(()=> {
      // If clicked again when the progress is running
      console.log('progressing')
      this.currentProgressValue >= 100 ? clearInterval(this.timerInterval) : this.currentProgressValue++;
    }, 10);
  }

  reset(){
    this.currentProgressValue = 0;
    clearInterval(this.timerInterval)
  }

  currentProgressValueChanged(){
    this.innerBarTarget.style.width = this.currentProgressValue + "%";
    this.progressTarget.textContent = `${this.currentProgressValue}%`
  }


}
