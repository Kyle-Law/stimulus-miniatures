import { Controller } from "stimulus"

export default class extends Controller {

  static targets = ["display"]
  static values = {text: Array, index:Number, arrayIndex:Number}

  connect() {
    console.log("TypeWriter controller is connected")
    this.type()
  }

  type(){
    const typeInterval = setInterval(() => {
      if (this.indexValue < this.textValue[this.arrayIndexValue].length){
        this.indexValue++
      } else {
        clearInterval(typeInterval)
        setTimeout(()=>{
          this.displayTarget.innerHTML = ""
          this.indexValue = 0
          this.arrayIndexValue = (this.arrayIndexValue + 1) % this.textValue.length
          this.type()
        },2000)
      }
    }, 50);
  }

  indexValueChanged(){
    this.displayTarget.innerHTML += this.textValue[this.arrayIndexValue].charAt(this.indexValue);
  }

}
