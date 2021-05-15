import { Controller } from "stimulus"

export default class extends Controller {
  static values = {index:Number}
  static targets = ["dot","slide"]
  static interval

  connect() {
    console.log("Slideshow controller is connected")
    this.setInterval()
  }

  setIndex(e){
    const index = e.currentTarget.dataset.id
    this.indexValue = index
  }

  next(){
    this.indexValue = this.indexValue == 3 ? 1 : this.indexValue+1
  }

  prev(){
    this.indexValue = this.indexValue == 1 ? 3 : this.indexValue-1
  }

  indexValueChanged(){
    this.setInterval()
    for (let i = 0;i < this.slideTargets.length;i++){
      this.dotTargets[i].classList.remove('active')
      this.slideTargets[i].style.display = "none"
    }
    this.slideTargets[this.indexValue - 1].style.display = "block"
    this.dotTargets[this.indexValue - 1].classList.add("active")
  }

  setInterval(){
    clearInterval(this.interval)
    this.interval = setInterval(()=>{this.next()},3000)
  }

}
