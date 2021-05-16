import { Controller } from "stimulus"

export default class extends Controller {

  static values = {mode: String}
  static targets = ["icon"]


  connect() {
    console.log("dark_light_controller is connected")
    this.toggleMode()
  }

  toggleMode(){
    this.modeValue = this.modeValue === 'light' ? 'dark' : 'light'
  }

  modeValueChanged(){
    this.modeValue === 'light' ? this.lightMode() : this.darkMode()
  }

  darkMode(){
    this.iconTarget.classList.replace('fa-sun','fa-moon')
  }

  lightMode(){
    this.iconTarget.classList.replace('fa-moon','fa-sun')
  }

}
