import { Controller } from "stimulus"

export default class extends Controller {
  static values = {index:Number}
  static targets = ["dot","slide"]

  connect() {
    console.log("Slideshow controller is connected")
  }

  setIndex(e){
    const index = e.currentTarget.dataset.id
    console.log(index)
    this.indexValue = index
  }

  next(){
    console.log('next')
    this.indexValue = this.indexValue == 3 ? 1 : this.indexValue+1
  }

  prev(){
    console.log('prev')
    this.indexValue = this.indexValue == 1 ? 3 : this.indexValue-1
  }

  indexValueChanged(){
    console.log(this.indexValue)
    console.log(this.slideTargets)
    console.log(this.dotTargets)
    for (let i = 0;i < this.slideTargets.length;i++){
      this.dotTargets[i].className.replace("active","")
      this.slideTargets[i].style.display = "none"
    }
    // this.dotTargets.forEach(dot => dot.className.replace("active",""))
    // this.slideTargets.forEach(slide => slide.style.display = "none")

    this.slideTargets[this.indexValue - 1].style.display = "block"
    this.dotTargets[this.indexValue - 1].className += " active"
  }

}
